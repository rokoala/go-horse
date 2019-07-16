import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation("axioms");

  return (
    <ul className="axioms">
      {Array.apply(null, Array(24)).map((axiom, index) => (
        <li key={index}>
          <h3>{t("title" + (index + 1))}</h3>
          <p>{t("description" + (index + 1))}</p>
        </li>
      ))}
      <style jsx>
        {`
          ul.axioms {
            list-style: none;
          }
          li {
            margin: 3rem 0;
            line-height: 1.8;
          }
          li:first-child {
            margin: 0px;
          }
        `}
      </style>
    </ul>
  );
};
