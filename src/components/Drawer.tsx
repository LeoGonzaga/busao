import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";
import TuneIcon from "@material-ui/icons/Tune";
import DiscreteSlider from "../components/Slider";
import { URL } from "../API";

export const SettingsButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: #161032;
  border: none;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 200px;
  flex-direction: column;
`;
export const SearchBar = styled.select`
  padding: 15px;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 4px;
  background-color: #161032;
  color: #fff;
`;

export const Title = styled.h3`
  color: #000;
  padding: 10px;
  font-weight: normal;
  font-size: 16px;
`;

interface Props {
  solid?: boolean;
}

export const ActionButton = styled.button`
  padding: 15px;
  width: 100%;
  margin: 5px 0;
  border-radius: 5px;
  background-color: ${(props: Props) => (props.solid ? "#161032" : "#fff")};
  border: none;
  color: ${(props: Props) => (props.solid ? "#fff" : "#161032")};
  font-weight: bold;
  border: 1px solid #ccc;
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    flexDirection: "column",
    border: "none",
    textAlign: "center",
    "&:hover,&:focus": {
      border: "none",
    },
  },
  paper: {
    backgroundColor: "#fff",
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    color: "#fff",
  },
}));

interface Modal {
  buscar?: any;
}
export default function TransitionsModal(props: Modal) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [cityStart, setCityStart] = React.useState([]);
  const [cityEnd, setCityEnd] = React.useState([]);
  const [company, setCompany] = React.useState();
  const [hour, setHour] = React.useState();

  const [selectStart, setSelectStart] = React.useState("Selecionar");
  const [selectEnd, setSelectEnd] = React.useState("Selecionar");
  const [selectHour, setSelectHour] = React.useState("");
  const [selectCompany, setSelectCompany] = React.useState("Selecionar");

  const [allBus, setAllBus] = React.useState([]);

  const getAllCitysForDataList = async () => {
    try {
      let res = await fetch(`${URL}/Names`);
      // console.log(`${URL}/Names`);
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

  useEffect(() => {
    getAllCitysForDataList();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // console.log("Companhia", selectCompany);
    // console.log("Inicio", selectStart);
    // console.log("Final", selectEnd);
    if (selectCompany == "Selecionar") {
      setSelectStart("Selecionar");
      setSelectEnd("Selecionar");
    } else if (selectStart == "Selecionar") {
      setSelectEnd("Selecionar");
    }
  }, [selectCompany, selectStart, selectEnd, selectHour]);

  const getValue = (value: any) => {
    setSelectHour(value);
  };

  return (
    <>
      <SettingsButton onClick={handleOpen}>
        <TuneIcon className={classes.root} />
      </SettingsButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <SearchBarContainer>
              <h2>Filtar por:</h2>
            </SearchBarContainer>
            <SearchBarContainer>
              <Title>Companhia</Title>
              <SearchBar
                name="start"
                id="start"
                value={selectCompany}
                onChange={async (e: any) => {
                  setSelectCompany(e.target.value);
                }}
              >
                <option value="Selecionar">Selecionar companhia</option>
                <option value="Irmãos Faria">Irmãos Faria</option>
                <option value="Gardenia">Gardenia</option>
              </SearchBar>
            </SearchBarContainer>

            <SearchBarContainer>
              <Title>Partida</Title>
              <SearchBar
                disabled={selectCompany == "Selecionar" ? true : false}
                name="end"
                id="end"
                value={selectStart}
                onChange={async (e: any) => {
                  setSelectStart(e.target.value);
                }}
              >
                <option value="Selecionar">Selecionar cidade</option>

                {cityStart && cityStart.length > 0
                  ? cityStart.map((city: any, index) => {
                      return (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      );
                    })
                  : null}
              </SearchBar>
            </SearchBarContainer>

            <SearchBarContainer>
              <Title>Chegada</Title>
              <SearchBar
                disabled={selectStart == "Selecionar" ? true : false}
                name="cars"
                id="cars"
                value={selectEnd}
                onChange={async (e: any) => {
                  setSelectEnd(e.target.value);
                }}
              >
                <option value="Selecionar">Selecionar cidade</option>

                {cityEnd && cityEnd.length > 0
                  ? cityEnd.map((city, index) => {
                      return (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      );
                    })
                  : null}
              </SearchBar>
            </SearchBarContainer>

            <DiscreteSlider data={selectHour} onChance={getValue} />

            <ActionButton
              solid
              onClick={() => {
                props.buscar(selectCompany, selectStart, selectEnd, selectHour);
                handleClose();
              }}
            >
              Buscar
            </ActionButton>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
