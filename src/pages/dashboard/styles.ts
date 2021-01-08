import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100vw;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  border-radius: 4px;
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
