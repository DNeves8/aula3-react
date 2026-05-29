// Função declarada fora do componente para calcular a porcentagem
function porcentagem(parte, total) {
  return Math.round((parte / total) * 100);
}

function Cartao() {
  // 1. Variável de texto
  const titulo = "Sobre a Aula 3";
  
  // 2. Variáveis numéricas
  const totalTopicos = 5;
  const concluidos = 1;

  const progressoAtual = porcentagem(concluidos, totalTopicos);

  return (
    <div className="cartao">
      {/* Usando a variável de texto */}
      <h3>{titulo}</h3>
      
      {/* Chamando a função de porcentagem */}
      <p>Progresso: {progressoAtual}%</p>
      
      {/* Fazendo uma operação matemática direta */}
      <p>Faltam {totalTopicos - concluidos} tópicos para terminar.</p>
      
      {/* Desafio Bônus: Operador ternário para mensagem dinâmica */}
      <p>Status: {progressoAtual >= 50 ? "No caminho certo!" : "Mãos à obra!"}</p>
    </div>
  );
}

export default Cartao;