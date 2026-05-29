// 1. Importando o arquivo CSS externo
import "./Cartao.css";

function porcentagem(parte, total) {
  return Math.round((parte / total) * 100);
}

function Cartao() {
  const titulo = "Sobre a Aula 3";
  const totalTopicos = 5;
  const concluidos = 3;
  const progressoAtual = porcentagem(concluidos, totalTopicos);

  // Variável para o Desafio Bônus (mude para false se quiser testar a cor normal)
  const éDestaque = true; 

  return (
    /* 2. Aplicando classe condicional do Desafio Bônus */
    <div className={éDestaque ? "cartao cartao--destaque" : "cartao"}>
      
      <h3>{titulo}</h3>
      
      <p>Progresso: {progressoAtual}%</p>
      <p>Faltam {totalTopicos - concluidos} tópicos para terminar.</p>
      <p>Status: {progressoAtual >= 50 ? "No caminho certo! 🚀" : "Mãos à obra! 💻"}</p>

      <ul style={{ paddingLeft: "10px" }}>
        {/* 3. Usando a classe de destaque no primeiro li */}
        <li className="destaque">✓ O que é React</li>
        <li>✓ Sintaxe JSX</li>
        <li>✓ Componentes funcionais</li>
      </ul>

      <button onClick={() => alert("Bons estudos na Aula 3! 🎉")}>
        Clique Aqui
      </button>
    </div>
  );
}

export default Cartao;