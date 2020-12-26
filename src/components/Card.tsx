import React from "react";
import styled from "styled-components";
import BusaoLogo from "../assets/logo.png";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 60%;
  height: 250px;
  margin: 10px auto;
  background-color: #770606;
  color: #fff;
  padding: 30px;
  border-radius: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const OnRoad = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BusImage = styled.img`
  width: 92px;
  height: 92px;
  border-radius: 50%;
`;
export const OnRoadTitle = styled.h1`
  font-size: 19px;
  font-weight: regular;
  padding-bottom: 10px;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 200px;
  @media (max-width: 400px) {
    justify-content: center;
  }
`;

export const Citys = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Started = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
`;

export const Price = styled.h1`
  font-size: 42px;
`;
export const Status = styled.div``;
export const IndicatorRound = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #27ff4a;
`;

const Card: React.FC = () => {
  return (
    <Container>
      <OnRoad>
        <BusImage src={BusaoLogo} />
        <OnRoadTitle>Em trânsito? Sim</OnRoadTitle>
      </OnRoad>
      <Details>
        <div>
          <Citys>Pedralva - Itajubá</Citys>
          <Started>Partida: 9h30</Started>
        </div>
        <Price>R$ 13,30</Price>
      </Details>
      <Status>
        <IndicatorRound />
      </Status>
    </Container>
  );
};

export default Card;
