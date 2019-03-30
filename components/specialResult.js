import Router from "next/router";
import { useTranslation } from "react-i18next";

const getCertificate = name => evt => {
  evt.preventDefault();
  Router.push({ pathname: "/certificate", query: { name } }, "/certificate");
};

export default ({ name }) => {
  const { t } = useTranslation("result");
  return (
    <section>
      <h1>{t("congratulations")}</h1>
      <p className="name">{name}</p>
      <h2>{t("your-score")}</h2>
      <img width="200" src="/static/images/vegeta.png" />
      <p className="over-9000 blink">IT'S OVER 9000%!!!</p>
      <button className="print" onClick={getCertificate(name)}>
        {t("print-certificate")}
      </button>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .over-9000 {
          margin-top: 0;
          text-align: center;
          font-size: 3rem;
          background-color: blue;
          color: #fdcc08;
          padding: 15px;
        }
        .name {
          text-align: center;
          font-size: 2.5rem;
        }
        .print {
          margin: 15px;
          font-size: 24px;
        }
      `}</style>
    </section>
  );
};
