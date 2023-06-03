import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  aligin-items: center;
`;

export const ContainerFormulario = styled.form`
  padding: 2%;
  width: auto;
  margin-top: 20px;
  display: flex;
  margin-top: 120px;
  align-items: bottom;
  height: 5px;
  width: 100%;
  border-radius: 10px;
`;

export const Conjunto = styled.label`
  margin-left: 100px;
  font-weight: bold;
  color: #fefefe;
`;

export const Dropdown = styled.select`
  max-width: 100px;
  min-width: 100px;
  border-radius: 5px;
`;

export const Opcao = styled.option``;

export const Botao = styled.div`
  background: #23a900;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 40px;
  box-shadow: 0px 0px 4px 2px #f6f6f6f6;
  width: 100px;
  color: #f6f6f6f6;
  border: 0px solid #f6f6f6f;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #01c4e7;
    color: #000000;
  }
`;

export const ContainerBotao = styled.div`
  height: 35px;
  padding: 2%;
  display: flex;
  margin-left: 100px;
`;
