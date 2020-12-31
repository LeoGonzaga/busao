import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  background-color: #000;
  width: 100vw;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 90vw;
  height: 100vh;
  margin: 0 auto;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  border-radius: 4px;
`;
export const Weather = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const ClearContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 40%;
  margin: 10px 0px;
`;

export const ClearText = styled.h1`
  color: #000;
  font-size: 24px;
`;

export const ClearCity = styled.h1`
  color: #161032;
  font-size: 24px;
  font-weight: bold;
`;
export const ClearButton = styled.button`
  width: 50%;
  border-radius: 5px;
  background-color: #fff;
  color: #161032;
  border: 1px solid #161032;
  padding: 10px;
  font-weight: bold;
`;
