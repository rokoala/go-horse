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
            color: black;
            height: 260px;
            font-size: 20px;
          }
          .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            padding: 20px;
            margin: 30px 0px;
          }
          h3 {
            line-height: 30px;
            font-family: Weston;
            font-size: 22px;
            color: #924116;
          }
          p {
            line-height: 30px;
          }
        `}
      </style>
    </>
  );
};
