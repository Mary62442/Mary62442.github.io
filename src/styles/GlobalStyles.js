import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body {
    color:#323232;
    overflow-x:hidden;
    padding:0;
    margin:0;
  }

  h1, h2, h3, h4 {
    font-weight:600;
  }

  .Paragraph__component {
    line-height:170%;
    font-size:18px;
  }
  
  
  * {
    box-sizing: border-box;
    background-position:center;
    background-size:cover;
    padding:0;
    margin:0;
  }

  html {
    overscroll-behavior-y: none;
    min-height: 100vh;
  }

  a {
    text-decoration:none;
  }

  

  @font-face {
    font-family: 'Open Sans', sans-serif;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', sans-serif;
`;
