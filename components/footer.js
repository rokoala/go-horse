import { SharePage } from "./";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation("index");
  return (
    <>
      <footer>
        <Link href={"/termsofservice-pt"}>
          <a>{t("terms-of-service")}</a>
        </Link>
        <a className="contact" href="mailto:xghcertification@gmail.com">
          {t("contact-us")}
        </a>
        <div className="share-buttons">
          <SharePage />
        </div>
      </footer>
      <style jsx>
        {`
          .share-buttons {
            display: flex;
          }
          .contact {
            margin-bottom: 20px;
          }
          a {
            text-decoration: none;
            line-height: 25px;
            font-weight: bold;
            font-size: 14px;
            color: white;
          }
          footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 50px;
            align-items: center;
            border-top: 1px solid rgba(0, 0, 0, 0.09);
            width: 100%;
            padding: 20px;
            background-color: black;
          }
        `}
      </style>
    </>
  );
};
