import "./Cartao.css";

function CartaoSobre() {
  const nome = "Seu Nome";
  const curso = "Análise e Desenvolvimento de Sistemas";
  const hobbies = ["Programar", "Jogar", "Assistir Séries"];

  return (
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
  );
}

export default CartaoSobre;