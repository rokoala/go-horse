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
    window.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#000"
        },
        button: {
          background: "#f1d600"
        }
      },
      theme: "classic",
      content: {
        message:
          "We use cookies to provide our services and for analytics and marketing. By continuing to browse our website, you agree to our use of cookies. To find out more about our use of cookies, please see our ",
        link: "Privacy policy",

        href: "https://xgohorse.com/privacypolicy"
      },
      type: "opt-in",
      onInitialise: function(status) {
        var type = this.options.type;
        var didConsent = this.hasConsented();
        if (type == "opt-in" && didConsent) {
          // enable cookies
          TagManager.initialize({
            gtmId: "GTM-WX2CMZZ",
            events: {
              event: "addGAA"
            }
          });
        }
        if (type == "opt-out" && !didConsent) {
          // disable cookies
          deleteAllCookies();
        }
      },
      onStatusChange: function(status, chosenBefore) {
        var type = this.options.type;
        var didConsent = this.hasConsented();
        if (type == "opt-in" && didConsent) {
          // enable cookies
          TagManager.initialize({
            gtmId: "GTM-WX2CMZZ",
            events: {
              event: "addGAA"
            }
          });
        }
        if (type == "opt-out" && !didConsent) {
          // disable cookies
          deleteAllCookies();
        }
      },
      onRevokeChoice: function() {
        var type = this.options.type;
        if (type == "opt-in") {
          // disable cookies
          deleteAllCookies();
        }
        if (type == "opt-out") {
          // enable cookies
        }
      }
    });
  }
  render() {
    const { Component, pageProps } = this.props;

    config({ ssrFadeout: true });
    return <Component {...pageProps} />;
  }
}

export default MyApp;
