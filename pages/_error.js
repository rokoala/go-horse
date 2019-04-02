import { Head } from "../components";
import { withTranslation } from "react-i18next";

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <Head title="XGH Certification - 404" />
        <div className="content">
          <h1>
            <a href="/">eXtreme GoHorse Process Certification</a>
          </h1>
          <h1>{t("404")}</h1>
          {/* <p>{t("explain")}</p> */}
          <img src="/static/images/construction.gif" />
          <p>{t("show-gif")}</p>
          <img src="/static/images/baby.gif" />
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
  }
}

export default withTranslation("error")(Error);
