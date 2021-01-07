import styled from "styled-components";

interface Props {
  solid?: boolean;
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  @media (max-width: 1000px) {
    justify-content: space-evenly;
    flex-direction: column;
    padding: 20px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;

export const BusContainer = styled.div`
  height: 500px;
  padding: 20px 10px;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const TitlePage = styled.h1`
  font-size: 24px;
  color: #161032;
  padding: 10px;
`;

export const JourneyTitle = styled.h1``;
export const InputText = styled.input`
  border: 1px solid #ccc;
  padding: 15px;
  width: 389px;
  max-width: 389px;
  margin: 5px 0;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  outline-color: #161032;
  @media (max-width: 420px) {
    width: 85%;
    margin: 5px 10px;
  }
`;

export const Text = styled.h1`
  font-size: 14px;
  color: #161032;
  padding: 10px;
`;
export const WeekContinaer = styled.div`
  padding: 10px;
  margin-bottom: 20px;
`;

export const ActionButton = styled.button`
  padding: 15px;
  width: 424px;
  max-width: 424px;
  margin: 5px 0;
  border-radius: 5px;
  background-color: ${(props: Props) => (props.solid ? "#161032" : "#fff")};
  border: none;
  color: ${(props: Props) => (props.solid ? "#fff" : "#161032")};
  font-weight: bold;
  border: 1px solid #ccc;

  @media (max-width: 420px) {
    width: 95%;
  }
`;

export const PassagerButton = styled.button``;

export const SearchBarContainer = styled.div``;
export const SearchBar = styled.input`
  width: 80vw;
  border: 1px solid #ccc;
  padding: 15px;
  outline-color: #161032;
  max-width: 500px;
`;

export const SearchBarButton = styled.button``;
