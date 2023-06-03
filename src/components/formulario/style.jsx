import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  aligin-items: center;
`;

export const ContainerFormulario = styled.form`
  // background: #840019;
  padding: 2%;
  width: auto;
  margin-top: 20px;
  // box-shadow: 0px 0px 8px 2px #fefefe;
  display: flex;
  margin-top: 120px;
  // justify-content: botto;
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
  // width: 30px;

  // display: flex;
  // aligin-items: center;
  // flex-direction: column;
  border-radius: 5px;
  // margin-left: 5%;
`;

export const Opcao = styled.option``;

export const Botao = styled.div`
  background: #23a900;
  // background: #01c4e7;

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
    // background-color: #c501e2;
    background-color: #01c4e7;

    color: #000000;
    // box-shadow: 0px 0px 8px 2px #f6f6f6f6;
  }
`;

export const ContainerBotao = styled.div`
  height: 35px;
  padding: 2%;
  display: flex;
  margin-left: 100px;
`;
