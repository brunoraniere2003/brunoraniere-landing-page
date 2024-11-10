import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1c1c1e; /* Fundo escuro */
    color: #fff; /* Texto padrão */
    font-family: 'Roboto Mono', monospace;
    scroll-behavior: smooth;
  }

  a {
    color: #ff007a; /* Rosa vibrante */
    text-decoration: none;
  }

  button {
    background-color: #ff007a;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Roboto Mono', monospace;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export default GlobalStyle;