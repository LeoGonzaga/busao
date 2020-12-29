import React from "react";
import styled from "styled-components";
export const Container = styled.button`
  width: 30px;
  height: 30px;
  background-color: green;
  border: none;
  border-radius: 50%;
  margin: 3px;
  color: #fff;
`;

interface Props {
  day: any;
}
const DayButton: React.FC<Props> = (props) => {
  return <Container>{props.day.substring(0, 1)}</Container>;
};

export default DayButton;
