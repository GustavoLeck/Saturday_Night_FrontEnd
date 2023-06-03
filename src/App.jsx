import style from "styled-components";
import { useContext } from "react";

import { AppContext } from "./AppContext";

import Header from "./components/header";
import ResultadoPesquisa from "./components/resultadoPesquisa";

function App() {
  const Container = style.div`
  font-family: Verdana, sans-serif;
  `;

  const { getMostrarPesquisa, getResultadoPesquisa } = useContext(AppContext);

  return (
    <Container>
      <Header></Header>
      {getMostrarPesquisa ? <ResultadoPesquisa></ResultadoPesquisa> : null}
    </Container>
  );
}

export default App;
