import React from "react";
import {
  Container,
  Logo,
  InputText,
  Title,
  SubTitle,
  ActionButton,
  PassagerButton,
} from "./styles";
import BusaoLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Login: React.FC = () => {
  return (
    <Container>
      <Logo src={BusaoLogo} />
      <Title>Busão</Title>
      <SubTitle>Horários na palma da sua mão</SubTitle>
      <InputText placeholder="Digite seu email" type="email"></InputText>
      <InputText placeholder="Digite sua senha " type="password"></InputText>
      <ActionButton>Entrar</ActionButton>
      <Link to="/dashboard">
        <PassagerButton>Sou passageiro</PassagerButton>
      </Link>
    </Container>
  );
};

export default Login;
