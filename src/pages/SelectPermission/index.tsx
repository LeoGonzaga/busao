import React, { useState } from "react";
import {
  Container,
  Logo,
  InputText,
  Title,
  SubTitle,
  ActionButton,
} from "./styles";
import BusaoLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const SelectPermission: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = async () => {
    try {
      let res = await fetch("https://busao.herokuapp.com/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, pass }),
      });

      let resJson = await res.json();
      console.log(resJson);
    } catch (e) {
      console.log(e);
    }
  };

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
