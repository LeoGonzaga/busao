import styled from "styled-components";

interface Props {
  solid?: boolean;
}
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
`;

export const Logo = styled.img`
  border-radius: 50%;
  width: 200px;
`;
export const Title = styled.h1`
  font-size: 78px;
  color: #161032;
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
  background-color: ${(props: Props) => (props.solid ? "#161032" : "#fff")};
  border: none;
  color: ${(props: Props) => (props.solid ? "#fff" : "#161032")};
  font-weight: bold;
  border: 1px solid #ccc;

  @media (max-width: 420px) {
    width: 80vw;
  }
`;
