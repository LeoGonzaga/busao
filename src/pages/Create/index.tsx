import React, { useEffect, useState } from "react";
import BusCard from "../../components/BusCard";
import Card from "../../components/Card";
import CheckDays from "../../components/CheckDays";
import CollapsibleTable from "../../components/Table";
import {
  Wrapper,
  Container,
  TitlePage,
  InputText,
  PassagerButton,
  WeekContinaer,
  ContainerCards,
  Text,
  JourneyTitle,
  SearchBarContainer,
  SearchBar,
  SearchBarButton,
} from "./styles";

const Create: React.FC = () => {
  const [cityStart, setCityStart] = useState("");
  const [cityEnd, setCityEnd] = useState("");
  const [value, setValue] = useState("");
  const [company, setCompany] = useState("");
  const [search, setSearch] = useState("");
  const [buses, setBuses] = useState([]);
  const daysArray: any = [];
  let json = {
    Seg: false,
    Ter: false,
    Qua: false,
    Qui: false,
    Sex: false,
    Sab: false,
    Dom: false,
  };
  let seg: boolean,
    ter: boolean,
    qua: boolean,
    qui: boolean,
    sex: boolean,
    sab: boolean,
    dom: boolean = false;
  const getDays = (day: string, check: any) => {
    switch (day) {
      case "Seg":
        seg = check;
        break;
      case "Ter":
        ter = check;
        break;
      case "Qua":
        qua = check;
        break;
      case "Qui":
        qui = check;
        break;
      case "Sex":
        sex = check;
        break;
      case "Sab":
        sab = check;
        break;
      case "Dom":
        dom = check;
        break;

      default:
        break;
    }
    json = {
      Seg: seg ? seg : false,
      Ter: ter ? ter : false,
      Qua: qua ? qua : false,
      Qui: qui ? qui : false,
      Sex: sex ? sex : false,
      Sab: sab ? sab : false,
      Dom: dom ? dom : false,
    };
  };

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

  useEffect(() => {
    try {
      getAllBuses();
    } catch (e) {
      console.log("Entrou no catch" + e);
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <TitlePage>Cadastrar jornada</TitlePage>
        <InputText placeholder="Cidade de partida" />
        <InputText placeholder="Cidade de destino" />
        <InputText placeholder="Valor da passagem - R$ 3,00" type="number" />
        <InputText placeholder="Horário - 10h00" />
        <InputText
          value={search}
          type="text"
          list="data"
          placeholder="Nome da empresa"
          onChange={(e) => setSearch(e.target.value)}
        ></InputText>

        <Text>Selecione os dias disponiveis</Text>
        <WeekContinaer>
          <CheckDays
            day="Seg"
            getCheck={(day: string, check: any) => getDays(day, check)}
          />
          <CheckDays
            day="Ter"
            getCheck={(day: string, check: any) => getDays(day, check)}
          />
          <CheckDays
            day="Qua"
            getCheck={(day: string, check: any) => getDays(day, check)}
          />
          <CheckDays
            day="Qui"
            getCheck={(day: string, check: any) => getDays(day, check)}
          />
          <CheckDays
            day="Sex"
            getCheck={(day: string, check: any) => getDays(day, check)}
          />
          <CheckDays
            day="Sab"
            getCheck={(day: string, check: any) => getDays(day, check)}
          />
          <CheckDays
            day="Dom"
            getCheck={(day: string, check: any) => getDays(day, check)}
          />
        </WeekContinaer>

        <PassagerButton
          onClick={() => {
            console.log(json);
          }}
        >
          Criar jornada
        </PassagerButton>
      </Container>

      <ContainerCards>
        <JourneyTitle>Jornadas</JourneyTitle>
        <SearchBarContainer>
          <SearchBar placeholder="Buscar por cidade ou horário"></SearchBar>
        </SearchBarContainer>
        <BusCard />
        <BusCard />
        <BusCard />
        <BusCard />
        <BusCard />
        <BusCard />
        <BusCard />
        <BusCard />
        <BusCard />
        <BusCard />
      </ContainerCards>
    </Wrapper>
  );
};

export default Create;
