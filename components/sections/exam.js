import Router from "next/router";
import { useTranslation } from "react-i18next";

export default ({ refProp }) => {
  const { t } = useTranslation("exam");

  const go = () => {
    const name = prompt("Please fill your name", "");
    if (name !== null || name !== "") {
      Router.push({ pathname: "/exam", query: { name } }, "/exam");
    }
  };
  return (
    <>
      <section ref={refProp} className="content">
        <h3 className="section-title">{t("dotheexam-title")}</h3>
        <p>{t("dotheexam")}</p>
        <button onClick={go}>{t("begin")}</button>
      </section>
      <style jsx>{`
        p {
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </>
  );
};
