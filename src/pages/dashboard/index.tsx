import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
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

  let colors = [
    "#623CEA",
    "#54426B",
    "#FCE762",
    "#161032",
    "#C42021",
    "#2B2D42",
    "#F7EC59",
    "#F15025",
  ];

  useEffect(() => {
    try {
      console.log(props);
      getAllBuses();
    } catch (e) {
      console.log("Entrou no catch" + e);
    }
  }, []);

  const getAllBuses = async () => {
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
    console.log("cliquei", e);
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

  return (
    <Wrapper>
      <Header
        isAdmin={props.auth}
        getBus={(e: any) => getBusesByCity(e)}
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
              }}
            >
              Limpar busca
            </ClearButton>
          </>
        ) : null}

        {buses && buses.length > 0
          ? buses?.map((bus: CardProps, i) => {
              let number = Math.floor(Math.random() * 6 - 0 + 1);
              // console.log(number);

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
                  color={colors[number]}
                />
              );
            })
          : null}
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
