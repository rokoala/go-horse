import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import withGA from "next-ga";
import "../i18n";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default withGA("UA-137508594-1", Router)(MyApp);
