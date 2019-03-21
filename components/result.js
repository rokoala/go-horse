import React from "react";
import { withNamespaces } from "../i18n";

const Result = ({ t, name, result }) => (
  <section>
    <h1>{t("congratulations")}</h1>
    <h2>{name}</h2>
    <h2>{t("score")}</h2>
    <p>{parseInt(result, 10) * 100}%</p>
    <img width="200" src="/static/genius-meme.jpg" />
    <button>{t("print-certificate")}</button>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        align-items: center;
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
