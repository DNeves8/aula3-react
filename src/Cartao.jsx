// Função de porcentagem da atividade anterior
function porcentagem(parte, total) {
  return Math.round((parte / total) * 100);
}

// 3. Criando uma variável de estilo externa (fora do componente)
const estiloItem = { 
  fontWeight: "bold", 
  color: "#1E2A2E",
  listStyleType: "none", // Remove a bolinha da lista para o item estilizado
  marginBottom: "8px"
};

function Cartao() {
  const titulo = "Sobre a Aula 3";
  const totalTopicos = 5;
  const concluidos = 3;
  const progressoAtual = porcentagem(concluidos, totalTopicos);

  return (
    // 1. Estilo inline direto no elemento raiz
    <div
      className="cartao"
      style={{
        padding: "20px",
        border: "2px solid #01696F",
        borderRadius: "12px",
        maxWidth: "420px",
        margin: "20px auto",
        backgroundColor: "#f9f9f9",
        fontFamily: "sans-serif"
      }}
    >
      {/* 2. Estilo inline no h3 usando camelCase */}
      <h3 style={{ color: "#01696F", marginTop: 0, fontSize: "24px" }}>
        {titulo}
      </h3>
      
      <p>Progresso: {progressoAtual}%</p>
      <p>Faltam {totalTopicos - concluidos} tópicos para terminar.</p>
      <p>Status: {progressoAtual >= 50 ? "No caminho certo! 🚀" : "Mãos à obra! 💻"}</p>

      <ul style={{ paddingLeft: "10px" }}>
        {/* 4. Usando a variável externa de estilo */}
        <li style={estiloItem}>✓ O que é React</li>
        <li style={{ color: "#555" }}>✓ Sintaxe JSX</li>
        <li style={{ color: "#555" }}>✓ Componentes funcionais</li>
      </ul>

      {/* Desafio Bônus: Botão estilizado com evento de clique */}
      <button
        onClick={() => alert("Bons estudos na Aula 3! 🎉")}
        style={{
          backgroundColor: "#01696F",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "10px",
          width: "100%"
        }}
      >
        Clique Aqui
      </button>
    </div>
  );
}

export default Cartao;