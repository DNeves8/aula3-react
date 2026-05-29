import "./Cartao.css";

function Cartao() {
  // Dados para o bloco "Sobre Mim"
  const nome = "Seu Nome"; 
  const curso = "Análise e Desenvolvimento de Sistemas";
  const hobbies = ["Programar", "Jogar", "Ouvir Música"];

  // Dados para o bloco "Aulas"
  const totalAulas = 15;
  const aulasAssistidas = 3;

  return (
    <div className="container-cartoes">
      {/* Cartão 1: Sobre Mim */}
      <div className="cartao">
        <h3>Sobre Mim</h3>
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>Curso:</strong> {curso}</p>
        <h4>Meus Hobbies:</h4>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

      {/* Cartão 2: Aulas */}
      <div className="cartao cartao--destaque">
        <h3>Minhas Aulas</h3>
        <p>Este semestre conta com um total de <strong>{totalAulas}</strong> aulas planejadas.</p>
        <p>Progresso atual: {aulasAssistidas} de {totalAulas} concluídas.</p>
        
        {/* Desafio Bônus: Barra de Progresso Embutida */}
        <h4>Progresso do Semestre:</h4>
        <div className="barra-progresso-bg">
          <div 
            className="barra-progresso-fill" 
            style={{ width: `${Math.round((aulasAssistidas / totalAulas) * 100)}%` }}
          >
            {Math.round((aulasAssistidas / totalAulas) * 100)}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartao;