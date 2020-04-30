import * as React from "react";
import NextApp from "next/app";
import { CacheProvider } from "@emotion/core";

// Use only { cache } from 'emotion'. Don't use { css }.
// import { cache } from "emotion";
import { ThemeProvider } from "../utils/ThemeContext";

import { Layout } from "../components/Layout";
import { GlobalStyles } from "../utils/GlobalStyles";
export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        {/*<CacheProvider value={cache}>*/}
        <GlobalStyles></GlobalStyles>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/*</CacheProvider>*/}
      </ThemeProvider>
    );
  }
}
