import React from "react";
import App from "next/app";
import config from "react-reveal/globals";
import "../i18n";
import TagManager from "react-gtm-module";

const deleteAllCookies = () => {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

class MyApp extends App {
  componentDidMount() {
    TagManager.initialize({
      gtmId: "GTM-WX2CMZZ"
    });
  }
  render() {
    const { Component, pageProps } = this.props;

    config({ ssrFadeout: true });
    return <Component {...pageProps} />;
  }
}

export default MyApp;
