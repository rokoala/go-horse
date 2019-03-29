import { useTranslation } from "react-i18next";
import Router from "next/router";

const getCertificate = name => evt => {
  evt.preventDefault();
  Router.push({ pathname: "/certificate", query: { name } }, "/certificate");
};

export default ({ name, result }) => {
  const { t } = useTranslation("result");

  return (
    <section>
      <h1>{t("congratulations")}</h1>
      <p className="name">{name}</p>
      <h2>{t("score")}</h2>
      <p className="blink">{parseInt(result, 10) * 100}%</p>
      <img className="genius" src="/static/images/genius-meme.jpg" />
      <button className="print" onClick={getCertificate(name)}>
        {t("print-certificate")}
      </button>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .name {
          font-size: 2.5rem;
        }
        .genius {
          border: 1px solid lightgray;
          width: 200px;
        }
        p.blink {
          font-size: 6rem;
          margin: 20px;
          color: #ffca00;
          text-shadow: 2px 2px 5px #252525;
          background-color: red;
          padding: 30px;
        }
        .print {
          margin: 15px;
          font-size: 24px;
        }
      `}</style>
    </section>
  );
};
