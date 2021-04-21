import React from "react";
import { Root, addPrefetchExcludes } from "react-static";
//
import Home from "./pages/Home";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./styles/theme";
import Header from "./components/Header";
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  img {
    max-width: 100%;
  }
`;

  return (
    <Root>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header white={true} />
        <MainContainer>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Home />
          </React.Suspense>
        </MainContainer>
      </ThemeProvider>
    </Root>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 120px;
  min-height: 90vh;
`;
