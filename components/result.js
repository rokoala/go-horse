import React from "react";
import { withNamespaces } from "../i18n";
import Router from "next/router";

const getCertificate = name => evt => {
  evt.preventDefault();
  Router.push({ pathname: "/certificate", query: { name } }, "/certificate");
};
const Result = ({ t, name, result }) => (
  <section>
    <h1>{t("congratulations")}</h1>
    <p className="name">{name}</p>
    <h2>{t("score")}</h2>
    <p className="blink">{parseInt(result, 10) * 100}%</p>
    <img width="200" src="/static/genius-meme.jpg" />
    <button onClick={getCertificate(name)}>{t("print-certificate")}</button>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .name {
        font-size: 2.5rem;
      }
      p.blink {
        font-size: 6rem;
        margin: 20px;
        color: #ffca00;
        text-shadow: 2px 2px 5px #252525;
      }
    `}</style>
  </section>
);

Result.getInitialProps = async () => {
  return {
    namespacesRequired: ["result"]
  };
};

export default withNamespaces("result")(Result);
