import React, { useState } from "react";
import {
  Container,
  Logo,
  InputText,
  Title,
  SubTitle,
  ActionButton,
  Form,
} from "./styles";
import BusaoLogo from "../../assets/logo.png";
import { Link, Redirect, useHistory } from "react-router-dom";
import { URL } from "../../API";

const Login: React.FC = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = async () => {
    try {
      // console.log("entrou");
      let res = await fetch(URL + "/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, pass }),
      });

      let resJson = await res.json();
      // console.log(resJson);
      if (resJson.user) {
        await localStorage.setItem("token", resJson.user._id);

        history.push("/create");
      } else {
        alert(
          "Hmmmmm! Parece que você não tem permissão ou digitou os dados errados."
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Logo src={BusaoLogo} />
      <Title>Busão</Title>
      <SubTitle>Horários na palma da sua mão</SubTitle>
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

      <ActionButton solid onClick={() => login()}>
        Entrar
      </ActionButton>
    </Container>
  );
};

export default Login;
