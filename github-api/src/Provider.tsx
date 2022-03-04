import React from "react";
import App from "./App";
import GlobalStyle from './styles/global'
import GithubProvider from "./providers/github-provider";
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
const Providers: React.FC =() => {
  return (
    <main>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>   
            <GithubProvider>
                <App />
            </GithubProvider>
        </ThemeProvider> 
    </main>
  );
};

export default Providers;