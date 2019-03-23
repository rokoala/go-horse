import React from "react";
import { withNamespaces } from "../i18n";

const SpecialResult = ({ t, name }) => (
  <section>
    <h1>{t("congratulations")}</h1>
    <h2>{name}</h2>
    <h2>{t("your-score")}</h2>
    <p className="over-9000">IS OVER 9000%</p>
    <img width="200" src="/static/genius-meme.jpg" />
    <button>{t("print-certificate")}</button>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .over-9000 {
        font-size: 3rem;
      }
    `}</style>
  </section>
);

SpecialResult.getInitialProps = async () => {
  return {
    namespacesRequired: ["result"]
  };
};

export default withNamespaces("result")(SpecialResult);
