import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  background-color: #000;
  width: 100vw;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const Container = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 4px;
`;

export const InputText = styled.input`
  border: 1px solid #ccc;
  padding: 15px;
  width: 389px;
  margin: 5px 0;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;

  @media (max-width: 420px) {
    width: 70%;
    margin: 5px 10px;
  }
`;

export const Text = styled.h1`
  font-size: 15px;
  color: #ccc;
`;
export const WeekContinaer = styled.div`
  display: flex;
  padding: 10px;
`;

export const ActionButton = styled.button`
  padding: 15px;
  width: 424px;
  margin: 5px 0;
  border-radius: 5px;
  background-color: #fff;
  border: none;
  color: #161032;
  font-weight: bold;
  border: 1px solid #ccc;

  @media (max-width: 420px) {
    width: 80%;
  }
`;

export const PassagerButton = styled.button`
  padding: 15px;
  width: 424px;
  border-radius: 5px;
  background-color: #161032;
  border: none;
  color: #fff;
  font-weight: bold;

  @media (max-width: 420px) {
    width: 80vw;
  }
`;
