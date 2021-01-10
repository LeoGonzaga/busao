import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TuneIcon from "@material-ui/icons/Tune";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

import { URL } from "../API";
import BusaoLogo from "../assets/logo.png";
import TransitionsModal from "./Drawer";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100vw;
  position: fixed;
  background-color: #fff;
  padding: 10px 0;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 100px;
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
  width: 55vw;
  min-width: 200px;
`;
export const SearchBar = styled.select`
  padding: 15px;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 4px;
  background-color: #161032;
  color: #fff;
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
  isAdmin: boolean;
  reset?: string;
  getByCompany?: any;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo src={BusaoLogo}></Logo>
        </LogoContainer>

        <TransitionsModal buscar={props.getByCompany} />
      </Wrapper>
    </Container>
  );
};

export default Header;
