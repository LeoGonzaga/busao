import React, { useState } from "react";
import { Link } from "react-router-dom";
import { URL } from "../../API";
import {
  Container,
  Logo,
  InputText,
  Title,
  SubTitle,
  ActionButton,
} from "./styles";
import BusaoLogo from "../../assets/logo.png";
const SelectPermission: React.FC = () => {
  return (
    <Container>
      <Logo src={BusaoLogo} />
      <Title>Busão</Title>
      <SubTitle>Horários na palma da sua mão</SubTitle>
      <Link to="/dashboard">
        <ActionButton solid>Sou passageiro</ActionButton>
      </Link>
      <Link to="/login">
        <ActionButton>Área administrativa</ActionButton>
      </Link>
    </Container>
  );
};

export default SelectPermission;
