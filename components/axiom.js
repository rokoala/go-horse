import { withNamespaces } from "../i18n";

const Axioms = ({ t }) => (
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

Axioms.getInitialProps = async () => {
  return {
    namespacesRequired: ["axioms"]
  };
};

export default withNamespaces("axioms")(Axioms);
