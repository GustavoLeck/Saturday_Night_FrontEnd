import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  aligin-items: center;
`;

export const ContainerFormulario = styled.form`
  background-color: #348e91;
  padding: 2%;
  margin-top: 20px;
  box-shadow: 0px 0px 8px 2px #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
`;

export const Dropdown = styled.select`
  // width: 30px;

  display: flex;
  aligin-items: center;
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: 5%;
`;

export const Opcao = styled.option``;

export const Botao = styled.div`
  background: #651366;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 35px;
  box-shadow: 0px 0px 8px 2px #f6f6f6f6;
  width: 100px;
  color: #f6f6f6f6;
  border: 0px solid #f6f6f6f;
  cursor: pointer;
`;

export const ContainerBotao = styled.div`
  height: 35px;
  padding: 2%;
  display: flex;
  margin-left: 3.5%;
  margin-top: 15%;
`;
