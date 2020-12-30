import React from "react";
import styled from "styled-components";
import BusaoLogo from "../assets/logo.png";
import DayButton from "./DayButton";

interface Card {
  startCity?: string;
  endCity?: string;
  value: number;
  onRoad?: boolean;
  hour?: string;
  company?: string;
  days?: any;
  color?: string;
}

interface ColorCard {
  color?: string;
}
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 60%;
  height: 250px;
  margin: 10px auto;
  background-color: ${(props: ColorCard) =>
    props.color ? "#161032" : "#770606"};
  color: #fff;
  padding: 30px;
  border-radius: 10px;

  @media (max-width: 780px) {
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
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const Citys = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Started = styled.h2`
  font-size: 15px;
  text-transform: uppercase;
`;

export const Price = styled.h1`
  font-size: 32px;
`;
export const Status = styled.div``;
export const IndicatorRound = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #27ff4a;
`;
export const IndicatorRoundOff = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #fb8a00;
`;

export const WeekContainer = styled.div``;

const Card: React.FC<Card> = ({
  endCity,
  hour,
  startCity,
  value,
  company,
  days,
  color,
}) => {
  let week: any = [];

  function daysOfWeek() {
    Object.keys(days).forEach(function (item) {
      week.push([item, days[item]]);
    });
  }

  return (
    <Container color={color}>
      <OnRoad>
        <BusImage src={BusaoLogo} />
        <OnRoadTitle>{company}</OnRoadTitle>
      </OnRoad>
      <Details>
        <div>
          <Citys>
            {startCity} - {endCity}
          </Citys>
          <Started>Partida: {hour}</Started>
        </div>
        <Price>R$ {value.toFixed(2).toString()}</Price>
        <WeekContainer>
          {daysOfWeek()}
          {week.map((i: any, index: number) => {
            // console.log(i[0], i[1]);

            return <DayButton day={i[0]} road={i[1]} key={index} />;
          })}
        </WeekContainer>
      </Details>
      <Status>{/* <IndicatorRound /> */}</Status>
    </Container>
  );
};

export default Card;
