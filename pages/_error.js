import { withNamespaces } from "../i18n";
import { Head } from "../components";

const Error = ({ t }) => (
  <React.Fragment>
    <Head title="XGH Certification - 404" />
    <div className="content">
      <h1>{t("404")}</h1>
      <p>{t("explain")}</p>
      {/* <p>{t("show-gif")}</p> */}
      <style jsx>
        {`
          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
    </div>
  </React.Fragment>
);

Error.getInitialProps = async () => {
  return {
    namespacesRequired: ["error"]
  };
};

export default withNamespaces("error")(Error);
