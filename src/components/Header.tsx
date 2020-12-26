import React from "react";
import styled from "styled-components";
import TuneIcon from "@material-ui/icons/Tune";
import SearchIcon from "@material-ui/icons/Search";
import BusaoLogo from "../assets/logo.png";

import { makeStyles, createStyles } from "@material-ui/core/styles";

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
  width: 100vw;
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
  color: #770606;
  font-weight: bold;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;
export const SearchBar = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  width: 80%;
`;

export const SearchBarButton = styled.button`
  width: 20%;
  padding: 10px;
  color: #fff;
  background-color: #770606;
  border: none;
`;
export const SettingsButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: #770606;
  border: none;
`;

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo src={BusaoLogo}></Logo>
          <Username>Oi, Usuário</Username>
        </LogoContainer>

        <SettingsButton
          onClick={() => alert("Funcionalidade em desenvolvimento.")}
        >
          <TuneIcon className={classes.root} />
        </SettingsButton>
      </Wrapper>
      <SearchBarContainer>
        <SearchBar placeholder="Buscar por cidade"></SearchBar>
        <SearchBarButton>
          <SearchIcon className={classes.root} />
        </SearchBarButton>
      </SearchBarContainer>
    </Container>
  );
};

export default Header;
