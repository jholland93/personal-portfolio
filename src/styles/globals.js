import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    margin: 0;
    padding: 0;
    cursor: none;
    
  }
  html{
    cursor: none;
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    cursor: none;
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    overflow-x:hidden;
    

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }

  
  html *,
  body * {
      cursor: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
