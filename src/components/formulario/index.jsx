import axios from "axios";
import moment from "moment";
import { AppContext } from "../../AppContext";
import {
  Container,
  ContainerFormulario,
  Dropdown,
  Opcao,
  Botao,
  ContainerBotao,
} from "./style";

import { useState, useEffect, useRef, useContext } from "react";

export default function Formulario() {
  const [getListaAno, setListaAno] = useState([]);
  const [getListaGeneros, setListaGeneros] = useState([]);

  const [getAno, setAno] = useState(1950);
  const [getGenero, setGenero] = useState(28);

  const {
    getMostrarPesquisa,
    setMostrarPesquisas,
    getResultadoPesquisa,
    setResultadoPesquisa,
  } = useContext(AppContext);
  const valoresFiltro = useRef(null);

  async function ConsultGeneros() {
    const response = await axios.get(`http://186.224.71.16:3000/api/genres`);
    setListaGeneros(response.data.ListaGeneros);
  }
  function handleClick() {
    let campos = Array.from(valoresFiltro.current);
    campos.map((e) => {
      if (e.name === "Ano") {
        setAno(e.value);
      }
      if (e.name === "Genero") {
        setGenero(e.value);
      }
    });
    consultFilme();
  }

  async function consultFilme() {
    const response = await axios.get(
      `http://186.224.71.16:3000/api/movie/${getAno}/${getGenero}`
    );
    setResultadoPesquisa(response.data);
    setMostrarPesquisas(true);
  }

  useEffect(() => {
    let listaAno = Array();
    let index = 1950;
    while (index <= moment().format("YYYY")) {
      listaAno.push(index);
      index++;
    }
    ConsultGeneros();
    setListaAno(listaAno);
  }, []);

  useEffect(() => {}, []);
  return (
    <>
      <Container>
        <ContainerFormulario ref={valoresFiltro}>
          Ano
          <Dropdown name="Ano">
            {getListaAno.map((ano) => {
              return <Opcao key={ano}>{ano}</Opcao>;
            })}
          </Dropdown>
          Genero
          <Dropdown name="Genero">
            {getListaGeneros.map((genero) => {
              return (
                <Opcao value={genero.id} key={genero.id}>
                  {genero.name}
                </Opcao>
              );
            })}
          </Dropdown>
          <ContainerBotao>
            <Botao onClick={handleClick}>
              <p>Pesquisar!</p>
            </Botao>
          </ContainerBotao>
        </ContainerFormulario>
      </Container>
    </>
  );
}
