import style from "styled-components";

export const Container = style.div`
  background-color: rgba(21, 36, 35, 0.9);
  height: auto;
  border-radius: 20px;
  box-shadow: 0px 0px 8px 2px #348e91;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 20px;
  padding: 15px;
`;

export const ContainerTexto = style.div`
  background-color: #f2f2f2;
  box-shadow: 0px 0px 5px 2px #f2f2f2;
  border-radius: 15px;
  margin-top: 3px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  height: auto;
  width: auto;
  min-width: 150px;
  max-width: 400px;
  color: #000000;
  margin-bottom: 15px;
`;

export const Conjunto = style.label`
  color: #fefefe;
`;

export const Imagem = style.img`
  height: 70%;
  width: 10%;
  margin-top: 1%;
`;

export const ContainerImagem = style.img`
`;

export const InformacoesContainer = style.div`
  margin-left: 30px
`;
