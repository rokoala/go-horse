import React from "react";
import App from "next/app";
import config from "react-reveal/globals";

import "../i18n";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    config({ ssrFadeout: true });
    return <Component {...pageProps} />;
  }
}

export default MyApp;
