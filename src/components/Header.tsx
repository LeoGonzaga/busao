import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TuneIcon from "@material-ui/icons/Tune";
import SearchIcon from "@material-ui/icons/Search";
import BusaoLogo from "../assets/logo.png";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      color: "#fff",
    },
  })
);

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100vw;
  margin: 10px 0;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 80vw;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  border-radius: 50%;
  width: 70px;
`;
export const Username = styled.h1`
  font-size: 23px;
  color: #161032;
  font-weight: bold;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  min-width: 200px;
`;
export const SearchBar = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  width: 80%;
  text-transform: capitalize;
`;

export const SearchBarButton = styled.button`
  width: 20%;
  padding: 10px;
  color: #fff;
  background-color: #161032;
  border: none;
`;
export const SettingsButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: #161032;
  border: none;
`;

interface HeaderProps {
  getBus: any;
}

const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [citys, setCitys] = useState([]);
  const getBusesBysearch = async () => {
    props.getBus(search);
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("enter");
  };

  const getAllCitysForDataList = async () => {
    try {
      let res = await fetch("https://busao.herokuapp.com/Names");
      let resJSON = await res.json();

      console.log(resJSON);
      if (resJSON) {
        setCitys(resJSON);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllCitysForDataList();
  }, []);

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo src={BusaoLogo}></Logo>
        </LogoContainer>
        {/* <Link to="/create"> */}
          <SettingsButton
            onClick={() => {
              alert("Filtros em desenvolvimento. ");
            }}
          >
            <TuneIcon className={classes.root} />
          </SettingsButton>
        {/* </Link> */}
      </Wrapper>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <SearchBarContainer>
          <SearchBar
            value={search}
            type="text"
            list="data"
            placeholder="Buscar por cidade"
            onChange={(e) => setSearch(e.target.value)}
          ></SearchBar>

          <datalist id="data">
            {citys && citys.length > 0
              ? citys.map((city, index) => {
                  return <option key={index} value={city} />;
                })
              : null}
          </datalist>
          <SearchBarButton
            type="submit"
            onClick={async () => {
              await getBusesBysearch();
              setSearch("");
            }}
          >
            <SearchIcon className={classes.root} />
          </SearchBarButton>
        </SearchBarContainer>
      </form>
    </Container>
  );
};

export default Header;
