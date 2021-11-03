import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  } */

  body {
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;
    
    color: #ececec;
    background: #080810;
    
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
