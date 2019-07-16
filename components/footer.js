import { withTranslation } from "react-i18next";
import { Donate, SharePage } from "../components";
import Link from "next/link";

const Footer = ({ t }) => (
  <>
    <footer>
      <Link href={"/termsofservice-" + "pt"}>
        <a>{t("terms-of-service")}</a>
      </Link>
      <a href="mailto:xghcertification@gmail.com">{t("contact-us")}</a>
      <div className="share-buttons">
        <SharePage />
      </div>
    </footer>
    <style jsx>
      {`
        footer {
          width: 100%;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: 20px;
          align-items: center;
          border-top: 1px solid gray;
          background-color: black;
          padding: 15px;
        }
        footer a {
          color: white;
          text-decoration: none;
          line-height: 2rem;
        }
        .share-buttons {
          display: flex;
          margin-top: 20px;
        }
      `}
    </style>
  </>
);

export default withTranslation("index")(Footer);
