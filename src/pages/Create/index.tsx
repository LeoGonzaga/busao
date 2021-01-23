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
  MaskInput,
} from "./styles";

import { URL } from "../../API";
const Create: React.FC = () => {
  const [cityStart, setCityStart] = useState([]);
  const [cityEnd, setCityEnd] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [value, setValue] = useState("");
  const [hour, setHour] = useState("");
  const [company, setCompany] = useState("");
  const [search, setSearch] = useState("");
  const [buses, setBuses] = useState([]);

  const [city, setCity] = useState("");
  const [reload, setReload] = useState(false);
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
      getAllCitysForDataList();
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

  const getAllCitysForDataList = async () => {
    try {
      let res = await fetch(`${URL}/Names`);
      console.log(`${URL}/Names`);
      let resJSON = await res.json();

      // console.log(resJSON);
      if (resJSON) {
        setCityStart(resJSON);
        setCityEnd(resJSON);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const createNewJourney = async () => {
    try {
      if (!hour || !start || !end || !company || !value) {
        alert("Por favor, preencha todos os campos para continuar!");
        return;
      }
      let maskHour = hour.split(":");
      console.log(maskHour);
      let configureHour = maskHour[0] + "h" + maskHour[1];

      // console.log(json);
      let data = {
        hour: configureHour,
        cityStart: start,
        cityEnd: end,
        value: parseFloat(value),
        citys: [],
        company: company,
        onRoad: false,
        days: json,
        holidays: false,
      };

      // console.log(data);

      let res = await fetch(URL + "/createRoute", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      let resJson = await res.json();
      setReload(true);
      if (resJson.citys) {
        alert("Jornada criada com sucesso!");
      } else {
        alert("Ops! Alguma coisa deu errada!");
      }
      // console.log(resJson);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (reload) {
      getAllBuses();
      setReload(false);
    }
  }, [reload]);
  return (
    <Wrapper>
      <Container>
        <TitlePage>Criar uma nova jornada</TitlePage>
        <InputText
          list="start"
          placeholder="Cidade de partida"
          onChange={(e) => setStart(e.target.value)}
          value={start}
        />

        <datalist id="start">
          {cityStart.length > 0 &&
            cityStart.map((city) => {
              return <option value={city} key={city} />;
            })}
        </datalist>

        <InputText
          placeholder="Cidade de destino"
          list="end"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
        <datalist id="end">
          {cityEnd.length > 0 &&
            cityEnd.map((city) => {
              return <option value={city} key={city} />;
            })}
        </datalist>

        <InputText
          type="time"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        ></InputText>

        <MaskInput
          mask="99.99"
          placeholder="Valor da passagem - R$ 3,00"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></MaskInput>

        <InputText
          value={company}
          type="text"
          list="data"
          placeholder="Nome da empresa"
          onChange={(e) => setCompany(e.target.value)}
        ></InputText>
        <datalist id="data">
          <option value="Irmãos Faria"></option>
          <option value="Gardenia"></option>
        </datalist>

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
            console.log(hour);
            createNewJourney();
          }}
        >
          Criar jornada
        </ActionButton>
        {/* <ActionButton
          onClick={() => {
            console.log(json);
            alert("Ainda estamos desenvolvendo essa funcionalidade!");
          }}
        >
          Alterar valor da passagem
        </ActionButton> */}
      </Container>

      <ContainerCards>
        <SearchBarContainer>
          {/* <SearchBar placeholder="Buscar por cidade ou horário"></SearchBar> */}
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
