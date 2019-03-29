import { Head } from "../components";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation("error");

  return (
    <React.Fragment>
      <Head title="XGH Certification - 404" />
      <div className="content">
        <h1>{t("Welcome to React")}</h1>
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
};
