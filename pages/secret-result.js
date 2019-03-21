import React from "react";
import { Head, Donate } from "../components";
import { withNamespace } from "../i18n";

const SecretResult = ({ t }) => (
  <React.Fragment>
    <Head title="XGH Certification" />
    <section>
      <h1>{t("congratulations")}</h1>
      <h2>{t("secret-result")}</h2>
      <h3>{t("no-score")}</h3>
      <img width="200" src="/static/hackerman.jpg" />
      <button>{t("print-certificate")}</button>
      <div className="donate">
        <Donate />
      </div>
    </section>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .donate {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </React.Fragment>
);

failureResult.SecretResult = async () => {
  return {
    namespacesRequired: ["result"]
  };
};

export default withNamespace("result")(SecretResult);
