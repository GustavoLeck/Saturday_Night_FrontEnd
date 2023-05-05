import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [getMostrarPesquisa, setMostrarPesquisas] = useState(false);
  const [getResultadoPesquisa, setResultadoPesquisa] = useState({});

  return (
    <AppContext.Provider
      value={{
        getMostrarPesquisa,
        setMostrarPesquisas,
        getResultadoPesquisa,
        setResultadoPesquisa,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
