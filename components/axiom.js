import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation("axioms");

  return (
    <ol>
      {Array.apply(null, Array(24)).map((axiom, index) => (
        <li key={index}>
          <b>{t("title" + (index + 1))}</b>
          <p>{t("description" + (index + 1))}</p>
        </li>
      ))}
      <style>
        {`
        ol{
            margin:50px;
        }
        li{
            margin: 20px 0px;
        }
    `}
      </style>
    </ol>
  );
};
