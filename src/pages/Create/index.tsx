import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
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
  ActionButton,
  WeekContinaer,
  ContainerCards,
  Text,
  JourneyTitle,
  SearchBarContainer,
  SearchBar,
  BusContainer,
  SearchBarButton,
} from "./styles";

const Create: React.FC = () => {
  const [cityStart, setCityStart] = useState("");
  const [cityEnd, setCityEnd] = useState("");
  const [value, setValue] = useState("");
  const [hour, setHour] = useState("");
  const [company, setCompany] = useState("");
  const [search, setSearch] = useState("");
  const [buses, setBuses] = useState([]);

  const [city, setCity] = useState("");

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

  useEffect(() => {
    try {
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
    let resJSON = await res.json();
    if (resJSON.message) {
      alert(resJSON.message);
    } else {
      setBuses(resJSON);
    }
  };

  return (
    <Wrapper>
      <Container>
        <TitlePage>Criar uma nova jornada</TitlePage>
        <InputText
          placeholder="Cidade de partida"
          value={cityStart}
          onChange={(e) => setCityStart(e.target.value)}
        />
        <InputText
          placeholder="Cidade de destino"
          value={cityEnd}
          onChange={(e) => setCityEnd(e.target.value)}
        />
        <InputText
          placeholder="Valor da passagem - R$ 3,00"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputText
          placeholder="Horário - 10h00"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        />
        <InputText
          value={company}
          type="text"
          list="data"
          placeholder="Nome da empresa"
          onChange={(e) => setCompany(e.target.value)}
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

        <ActionButton
          solid
          onClick={() => {
            console.log(json);
          }}
        >
          Criar jornada
        </ActionButton>
        <ActionButton
          onClick={() => {
            console.log(json);
          }}
        >
          Alterar valor da passagem
        </ActionButton>
      </Container>

      <ContainerCards>
        <SearchBarContainer>
          <SearchBar placeholder="Buscar por cidade ou horário"></SearchBar>
        </SearchBarContainer>
        <BusContainer>
          {buses && buses.length > 0 ? (
            buses?.map((bus: any, i) => {
              return (
                <BusCard
                  key={i}
                  cityStart={bus.cityStart}
                  cityEnd={bus.cityEnd}
                  hour={bus.hour}
                />
              );
            })
          ) : (
            <div
              style={{
                display: "flex",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </div>
          )}
        </BusContainer>
      </ContainerCards>
    </Wrapper>
  );
};

export default Create;
