import React from "react";
import styled from "styled-components";

export interface Card {
  cityStart?: string;
  cityEnd?: string;
  hour?: string;
}

const Container = styled.button`
  border: 1px solid #161032;
  width: 100%;
  padding: 30px 20px;
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

const BusCard: React.FC<Card> = ({ cityStart, cityEnd, hour }) => {
  return (
    <Container>
      De {cityStart} para {cityEnd} - {hour}
    </Container>
  );
};

export default BusCard;
