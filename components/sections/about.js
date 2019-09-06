import { useTranslation } from "react-i18next";

export default ({ refProp }) => {
  const { t } = useTranslation("about");
  return (
    <>
      <section ref={refProp} className="content">
        <h3>{t("what-is-title")}</h3>
        <p>{t("what-is")}</p>
      </section>
      <style jsx>
        {`
          section {
            background: #f5d7b0;
            color: black;
            height: 390px;
            font-size: 20px;
          }
          .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
          h3 {
            margin: 20px;
            line-height: 30px;
            font-family: Weston;
            font-size: 25px;
            color: #924116;
          }
          p {
            line-height: 30px;
            padding: 20px;
          }
        `}
      </style>
    </>
  );
};
