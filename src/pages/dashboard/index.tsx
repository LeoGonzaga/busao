import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import Card from "../../components/Card";
import Header from "../../components/Header";
import { URL } from "../../API";
import {
  Container,
  Wrapper,
  ClearText,
  ClearButton,
  ClearCity,
  ClearContainer,
} from "./styles";

interface CardProps {
  cityStart: string;
  cityEnd: string;
  value: number;
  onRoad: boolean;
  hour: string;
  company: string;
  days: any;
}

interface Dash {
  auth: boolean;
}
const Dashboard: React.FC<Dash> = (props: any) => {
  const [buses, setBuses] = useState([]);
  const [city, setCity] = useState("");
  const [resetDropdown, setResetDropDown] = useState("");
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    try {
      // console.log(props);
      getAllBuses();
    } catch (e) {
      console.log("Entrou no catch" + e);
    }
  }, []);

  const getAllBuses = async () => {
    setResetDropDown("");
    let res = await fetch("https://busao.herokuapp.com/Buses");
    // console.log(res);
    let resJSON = await res.json();
    // console.log(resJSON);
    if (resJSON.message) {
      alert(resJSON.message);
    } else {
      setBuses(resJSON);
    }
  };

  const getBusesByCity = async (e: any) => {
    // console.log("cliquei", e);
    setResetDropDown("");
    if (e == "Selecionar") {
      getAllBuses();
      return;
    }
    setCity(e);
    let res = await fetch("https://busao.herokuapp.com/busByCity", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ cityStart: e }),
    });
    // console.log(res);
    let resJSON = await res.json();
    // console.log(resJSON);
    if (resJSON.message) {
      alert(resJSON.message);
    } else {
      setBuses(resJSON);
    }
  };
  const getStartBusesByCompany = async (
    company: any,
    start: any,
    end: any,
    hour: any
  ) => {
    // console.log("entrou:", company, start, end, hour);

    if (company == "Selecionar") {
      try {
        getAllBuses();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        if (start == "Selecionar" && end == "Selecionar" && hour == 0) {
          let res = await fetch(
            `${URL}/busFind?cityStart&cityEnd&hour&company=${company}`
          );
          let resJSON = await res.json();
          if (resJSON.length > 0) {
            setBuses(resJSON);
          } else {
            alert("Nenhum ônibus foi cadastrado com essa configuração.");
          }
        } else if (end == "Selecionar" && hour == 0) {
          let res = await fetch(
            `${URL}/busFind?cityStart=${start}&cityEnd&hour&company=${company}`
          );
          let resJSON = await res.json();

          if (resJSON.length > 0) {
            setBuses(resJSON);
          } else {
            alert("Nenhum ônibus foi cadastrado com essa configuração.");
          }
        } else if (hour == 0) {
          let res = await fetch(
            `${URL}/busFind?cityStart=${start}&cityEnd=${end}&hour&company=${company}`
          );
          let resJSON = await res.json();
          if (resJSON.length > 0) {
            setBuses(resJSON);
          } else {
            alert("Nenhum ônibus foi cadastrado com essa configuração.");
          }
        }

        if (hour != 0) {
          let res = await fetch(
            `${URL}/busFind?cityStart&cityEnd&hour=${hour}&company`
          );
          let resJSON = await res.json();
          if (resJSON.length > 0) {
            setBuses(resJSON);
          } else {
            alert("Nenhum ônibus foi cadastrado com essa configuração.");
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <Wrapper>
      <Header
        getByCompany={getStartBusesByCompany}
        isAdmin={props.auth}
        getBus={(e: any) => getBusesByCity(e)}
        reset={resetDropdown}
      ></Header>

      <Container>
        {city ? (
          <>
            <ClearContainer>
              <ClearText>Saindo de:</ClearText>
              <ClearCity>{city}</ClearCity>
            </ClearContainer>
            <ClearButton
              onClick={() => {
                getAllBuses();
                setCity("");
                setResetDropDown("Clear");
              }}
            >
              Limpar busca
            </ClearButton>
          </>
        ) : null}

        {buses && buses.length > 0 ? (
          buses?.map((bus: CardProps, i) => {
            return (
              <Card
                key={i}
                startCity={bus.cityStart}
                endCity={bus.cityEnd}
                value={bus.value}
                onRoad={true}
                hour={bus.hour}
                company={bus.company}
                days={bus.days}
                color={bus.company == "Gardenia" ? "#9c292a" : "#2A2A72"}
              />
            );
          })
        ) : (
          <div
            style={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        )}
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
