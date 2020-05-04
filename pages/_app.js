import * as React from "react";
import NextApp from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { ThemeProvider } from "../src/utils/ThemeContext";
import { Layout } from "../src/components/Layout";
import { GlobalStyles } from "../src/utils/GlobalStyles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <Provider store={store}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    );
  }
}
