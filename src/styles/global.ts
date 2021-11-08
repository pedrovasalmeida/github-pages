import { createGlobalStyle, keyframes } from 'styled-components';

import { Theme } from './theme';

const animatedBackground = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export default createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;
    
    color: ${Theme.colors.white};
    /* background: #080810; */
    /* background: linear-gradient(to top left, #080810, #0d0d1a, #121224); */
    /* background: radial-gradient(farthest-corner at 40px 40px, #16162b 0%, #121224 50%, #080810 100%); */
    background: linear-gradient(-45deg, #16162b, #121224, #080810, #080810);
    /* background: rgb(16,16,78); */
    /* background: radial-gradient(circle, rgba(16,16,78,1) 0%, rgba(30,30,93,1) 0%, rgba(8,8,16,1) 100%); */
	  background-size: 400% 400%;

    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;

    animation: ${animatedBackground} 11s ease infinite;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
