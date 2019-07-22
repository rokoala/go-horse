import { Donate, SharePage } from "./";
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
        <Donate />
        <div className="share-buttons">
          <SharePage />
        </div>
      </footer>
      <style jsx>
        {`
          .share-buttons {
            display: flex;
            margin-top: 15px;
          }
          .contact {
            margin-bottom: 20px;
          }
          footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 20px;
            align-items: center;
            border-top: 1px solid gray;
            color: black;
            width: 100%;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};
