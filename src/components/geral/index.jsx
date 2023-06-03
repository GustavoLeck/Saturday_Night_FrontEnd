import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Container } from "./style";
import Header from "../header";
import ResultadoPesquisa from "../resultadoPesquisa";

export default function Geral() {
  const { getMostrarPesquisa } = useContext(AppContext);

  return (
    <Container>
      <Header></Header>
      {getMostrarPesquisa ? <ResultadoPesquisa></ResultadoPesquisa> : null}
    </Container>
  );
}
