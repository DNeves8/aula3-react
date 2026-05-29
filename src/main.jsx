// 1. Importa a ferramenta do React para ativação do Modo Estrito de desenvolvimento
import { StrictMode } from "react";

// 2. Importa o criador de raiz do React DOM, que conecta o React ao HTML do navegador
import { createRoot } from "react-dom/client";

// 3. Importa o componente principal (App), que serve como o coração da nossa aplicação
import App from "./App.jsx";

// 4. Importa os estilos CSS globais da aplicação
import "./index.css";

/* 5. Busca o elemento div no 'index.html' (usando o ID correspondente),
     cria a raiz do React nele e renderiza o nosso componente <App /> dentro dele.
  
  Nota: O <StrictMode> não renderiza nada visual, ele serve para ajudar o programador
  colocando avisos e alertas amigáveis de erros ocultos no console do navegador.
*/
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);