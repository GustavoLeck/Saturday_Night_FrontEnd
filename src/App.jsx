import Header from "./components/header";
import Formulario from "./components/formulario";
import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
function App() {
  const {
    getMostrarPesquisa,
    setMostrarPesquisas,
    getResultadoPesquisa,
    setResultadoPesquisa,
  } = useContext(AppContext);

  function handleMostrar() {
    console.log("Teste");
  }

  useEffect(() => {
    console.log("Teste");
  }, [getMostrarPesquisa]);

  return (
    <>
      <Header></Header>
      <Formulario>{handleMostrar}</Formulario>
      {() => {
        if (getMostrarPesquisa === true) {
          return <h1></h1>;
        }
      }}
    </>
  );
}

export default App;
