# Aula 3 - Introdução ao React (aula3-react)

Este repositório contém as 10 atividades práticas da Aula 3. O projeto foi construído de forma incremental, onde cada etapa reutiliza os componentes da anterior, servindo como base para as próximas aulas de Props e Estado.

## Objetivos principais

* Configuração de ambiente com Vite
* Prática das regras de sintaxe do JSX
* Modularização e estilização de componentes

## Diretrizes de desenvolvimento

* Commits obrigatórios a cada atividade concluída (ex: `feat: cartao com expressoes JSX`)
* Resolução de erros direto pelo console do navegador (regras do JSX)
* Projeto único e sequencial

---

## O que cada atividade implementa

* **ATIVIDADE 01: Criar um projeto React com Vite**
  * Geração do scaffold inicial do projeto e checagem de versões do Node/npm.

* **ATIVIDADE 02: Instalar dependências e rodar o servidor**
  * Criação da pasta `node_modules` com `npm install` e teste do mecanismo de Hot Module Replacement (HMR).

* **ATIVIDADE 03: Primeiro componente: Saudacao**
  * Criação do componente funcional isolado `Saudacao.jsx` e sua renderização no `App.jsx`.

* **ATIVIDADE 04: Componente Cartao e Elemento Raiz Único**
  * Estudo da regra de retorno do JSX agrupando múltiplas tags com fragmentos (`<> ... </>`).

* **ATIVIDADE 05: Expressões JavaScript em JSX**
  * Uso de chaves `{}` para renderizar variáveis de texto, operações matemáticas e funções de cálculo.

* **ATIVIDADE 06: Estilos inline e atributos JSX**
  * Aplicação de styles com a sintaxe `style={{ ... }}` em camelCase e uso correto do atributo `className`.

* **ATIVIDADE 07: Estilos externos com CSS e className**
  * Refatoração do cartão para isolar toda a estilização visual no arquivo externo `Cartao.css`.

* **ATIVIDADE 08: Componente Cabecalho e composição na árvore**
  * Prática de composição modular organizando a estrutura com `<Cabecalho />`, `<Saudacao />` e os cartões.

* **ATIVIDADE 09: Entendendo main.jsx e ReactDOM.createRoot()**
  * Mapeamento do ponto de entrada do React no HTML real (`div#root`), adicionando comentários explicativos e modo `<StrictMode>`.

* **ATIVIDADE 10: Mini aplicação final: "Minha primeira página com React"**
  * Integração de todos os conceitos em uma página pessoal com múltiplos cartões em Flexbox, rodapé e uma barra de progresso visual (desafio bônus).

---
Desenvolvido por **Davi** — 2026.