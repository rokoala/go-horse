import React from "react";
import { Head, Donate } from "../components";
import { useTranslation } from "react-i18next";
import Router from "next/router";

const getCertificate = name => evt => {
  evt.preventDefault();
  Router.push({ pathname: "/certificate", query: { name } }, "/certificate");
};

export default ({ name }) => {
  const { t } = useTranslation("result");
  return (
    <React.Fragment>
      <Head title="XGH Certification" />
      <section>
        <h1>{t("congratulations")}</h1>
        <h2 className="secret-result">{t("secret-result")}</h2>
        <h3>{t("no-score")}</h3>
        <img width="200" src="/static/images/hackerman.jpg" />
        <button className="print" onClick={getCertificate(name || "hackerman")}>
          {t("print-certificate")}
        </button>
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .secret-result {
          text-align: center;
        }
        .donate {
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .print {
          margin: 15px;
          font-size: 24px;
        }
      `}</style>
    </React.Fragment>
  );
};
