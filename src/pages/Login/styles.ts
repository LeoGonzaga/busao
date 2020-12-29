import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

export const Logo = styled.img`
  border-radius: 50%;
  width: 200px;
`;
export const Title = styled.h1`
  font-size: 78px;
  color: #770606;
`;

export const SubTitle = styled.h1`
  font-size: 16px;
  color: #878484;
  font-weight: none;
  padding-bottom: 20px;
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

export const ActionButton = styled.button`
  

  padding: 15px;
  width: 424px;
  margin: 5px 0;
  border-radius: 5px;
  background-color: #fff;
  border: none;
  color: #770606;
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
  background-color: #770606;
  border: none;
  color: #fff;
  font-weight: bold;

  @media (max-width: 420px) {
    width: 80vw;
  }
`;
