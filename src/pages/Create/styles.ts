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
    margin: 0 auto;
  }
`;
export const Container = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 40px;
  height: 90vh;
  border-radius: 4px;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  overflow-y: scroll;
  align-items: center;
  height: 600px;
`;

export const TitlePage = styled.h1`
  font-weight: bold;
  color: #161032;
  margin-bottom: 10px;
`;

export const JourneyTitle = styled.h1`
  font-weight: bold;
  color: #161032;
  padding: 35px;
`;
export const InputText = styled.input`
  border: 1px solid #ccc;
  padding: 5px;
  width: 389px;
  margin: 5px 0;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;

  @media (max-width: 420px) {
    width: 90%;
    margin: 5px 10px;
  }

  &:focus {
    outline-color: #161032;
  }
`;

export const Text = styled.h1`
  font-size: 15px;
  color: #161032;
  padding: 10px 0px 0px 0px;
`;
export const WeekContinaer = styled.div`
  display: flex;
  padding: 10px;
`;

export const ActionButton = styled.button`
  padding: 5px;
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
  padding: 5px;
  border-radius: 5px;
  background-color: #161032;
  border: 1px solid #fff;
  color: #fff;
  font-weight: bold;
  width: 100%;
  transition: 0.4s;
  @media (max-width: 420px) {
    width: 80vw;
  }

  &:hover {
    background-color: #fff;
    border: 1px solid #161032;
    color: #161032;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const SearchBar = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  width: 80%;
`;

export const SearchBarButton = styled.button`
  width: 20%;
  padding: 10px;
  color: #fff;
  background-color: #161032;
  border: none;
`;
