import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
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

const Dashboard: React.FC = () => {
  const [buses, setBuses] = useState([]);
  useEffect(() => {
    try {
      getAllBuses();
    } catch (e) {
      console.log("Entrou no catch" + e);
    }
  }, []);

  const getAllBuses = async () => {
    let res = await fetch("http://localhost:3003/Buses");
    console.log(res);
    let resJSON = await res.json();
    console.log(resJSON);
    if (resJSON.message) {
      alert(resJSON.message);
    } else {
      setBuses(resJSON);
      // var d = new Date();
      // var n = d.getDay();

      // console.log(n);
    }
  };
  return (
    <Wrapper>
      <Header></Header>

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
