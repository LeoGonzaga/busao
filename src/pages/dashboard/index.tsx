import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import SwipeableTemporaryDrawer from "../../components/Drawer";
import Header from "../../components/Header";
import { Container, Wrapper, Grid, Weather } from "./styles";

interface CardProps {
  cityStart: string;
  cityEnd: string;
  value: number;
  onRoad: boolean;
  hour: string;
  company: string;
  days: any;
}

const Dashboard: React.FC = (props: any) => {
  const [buses, setBuses] = useState([]);
  useEffect(() => {
    try {
      getAllBuses();
    } catch (e) {
      console.log("Entrou no catch" + e);
    }
  }, []);

  const getAllBuses = async () => {
    let res = await fetch("https://busao.herokuapp.com/Buses");
    console.log(res);
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
    let res = await fetch("https://busao.herokuapp.com/busByCity", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ cityStart: e }),
    });
    console.log(res);
    let resJSON = await res.json();
    console.log(resJSON);
    if (resJSON.message) {
      alert(resJSON.message);
    } else {
      setBuses(resJSON);
    }
  };

  return (
    <Wrapper>
      <Header getBus={(e: any) => getBusesByCity(e)}></Header>

      <Container>
        {buses && buses.length > 0
          ? buses?.map((bus: CardProps, i) => {
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
                />
              );
            })
          : null}
      </Container>
    </Wrapper>
  );
};

export default Dashboard;