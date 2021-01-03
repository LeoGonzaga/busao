import React, { Children, useState } from "react";
import styled from "styled-components";

interface Props {
  check?: any;
  day?: any;
  children?: any;
  getCheck?: any;
}
export const Container = styled.button`
  width: 35px;
  height: 35px;
  background-color: ${(props: Props) => (props.check ? "#161032" : "#ccc")};
  border: none;
  border-radius: 50%;
  margin: 3px;
  color: #fff;
  &:focus {
    border: none;
    outline: none;
  }
`;

const CheckDays: React.FC<Props> = (props) => {
  const [check, setCheck] = useState(false);

  const checked = async (day: string, check: any) => {
    props.getCheck(day, check);
  };

  return (
    <Container
      check={check}
      onClick={() => {
        setCheck(!check);
        checked(props.day, !check);
      }}
    >
      {props?.day.substring(0, 1)}
    </Container>
  );
};

export default CheckDays;
