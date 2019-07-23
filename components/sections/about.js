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
          .content {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          h3 {
            margin: 20px;
            line-height: 30px;
            text-align: right;
          }
          p {
            line-height: 20px;
            padding: 20px;
          }
        `}
      </style>
    </>
  );
};
