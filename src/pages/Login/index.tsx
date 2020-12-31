import React, { useState } from "react";
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
        <PassagerButton>Sou passageiro</PassagerButton>
      </Link>
      <InputText
        value={email}
        placeholder="Digite seu email"
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></InputText>
      <InputText
        value={pass}
        placeholder="Digite sua senha "
        type="password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      ></InputText>

      <ActionButton
        onClick={() =>
          alert("Você não tem permissão para acessar o painel administrativo.")
        }
      >
        Entrar
      </ActionButton>
    </Container>
  );
};

export default Login;
