import "./Cartao.css";

function CartaoAulas() {
  const totalAulas = 15;
  const concluidas = 3;

  return (
    <div className="cartao cartao--destaque">
      <h3>Minhas Aulas</h3>
      <p>Este semestre conta com um total de <strong>{totalAulas}</strong> aulas planejadas.</p>
      <p>Faltam {totalAulas - concluidas} tópicos.</p>
      
      {/* Desafio Bônus: Barra de progresso */}
      <h4>Progresso:</h4>
      <div className="barra-progresso-bg">
        <div 
          className="barra-progresso-fill" 
          style={{ width: `${Math.round((concluidas / totalAulas) * 100)}%` }}
        >
          {Math.round((concluidas / totalAulas) * 100)}%
        </div>
      </div>
    </div>
  );
}

export default CartaoAulas;