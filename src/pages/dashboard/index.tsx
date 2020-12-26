import React from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";

import { Container, Wrapper, Grid, Weather } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Wrapper>
      <Header></Header>

      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
