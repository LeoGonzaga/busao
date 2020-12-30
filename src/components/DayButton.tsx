import React from "react";
import styled from "styled-components";

interface Props {
  day?: any;
  road?: any;
}
export const Container = styled.button`
  width: 35px;
  height: 35px;
  background-color: ${(props: Props) => (props.road ? "green" : "#ccc")};
  border: none;
  border-radius: 50%;
  margin: 3px;
  color: #fff;
  &:focus {
    border: none;
    outline: none;
  }
`;

const DayButton: React.FC<Props> = (props) => {
  return <Container road={props.road}>{props.day.substring(0, 1)}</Container>;
};

export default DayButton;
