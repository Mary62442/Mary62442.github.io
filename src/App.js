import React, { useEffect } from "react";
import { Root, addPrefetchExcludes } from "react-static";
//
import Home from "./pages/Home";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./styles/theme";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyles";
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
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
