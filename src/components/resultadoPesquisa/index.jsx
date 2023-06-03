import {
  Container,
  ContainerTexto,
  Conjunto,
  Imagem,
  InformacoesContainer,
} from "./style";
import { AppContext } from "../../AppContext";
import { useState, useEffect, useRef, useContext } from "react";

export default function ResultadoPesquisa() {
  const [getUrl, setUrl] = useState(
    "http://image.tmdb.org/t/p/w200/mSta5O31rPUcZH98psx0cxLbPXd.jpg"
  );
  const { getResultadoPesquisa } = useContext(AppContext);
  useEffect(() => {
    setUrl("http://image.tmdb.org/t/p/w200" + getResultadoPesquisa.poster_path);
  }, [getResultadoPesquisa]);

  return (
    <Container>
      <Imagem src={getUrl}></Imagem>
      <InformacoesContainer>
        <Conjunto>
          Nome:
          <ContainerTexto>{getResultadoPesquisa.original_title}</ContainerTexto>
        </Conjunto>

        <Conjunto>
          Descrição:
          <ContainerTexto>{getResultadoPesquisa.overview}</ContainerTexto>
        </Conjunto>
      </InformacoesContainer>
    </Container>
  );
}
