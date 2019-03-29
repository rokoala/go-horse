import { withNamespaces } from "../i18n";

const Error = ({ t }) => <h1>{t("404")}</h1>;

Error.getInitialProps = async () => {
  return {
    namespacesRequired: ["error"]
  };
};

export default withNamespaces("error")(Error);
