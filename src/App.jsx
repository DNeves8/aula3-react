import Cabecalho from "./Cabecalho";
import Saudacao from "./Saudacao";
import CartaoSobre from "./CartaoSobre";
import CartaoAulas from "./CartaoAulas";
import Rodape from "./Rodape";

function App() {
  return (
    <>
      <Cabecalho />
      <Saudacao />
      <div className="container-cartoes">
        <CartaoSobre />
        <CartaoAulas />
      </div>
      <Rodape />
    </>
  );
}

export default App;