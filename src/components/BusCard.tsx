import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border: 1px solid #161032;
  width: 90%;
  padding: 30px 0px;
  text-align: center;
  margin: 10px 0;
  border-radius: 4px;
  background-color: #161032;
  color: #fff;
  transition: 0.3s;

  &:hover {
    background-color: #fff;
    border: 1px solid #161032;
    color: #161032;
  }
`;
const BusCard: React.FC = () => {
  return <Container>Pedralva - Itajuba - 19h</Container>;
};

export default BusCard;
