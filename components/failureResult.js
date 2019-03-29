import Link from "next/link";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation("result");
  return (
    <section>
      <h1>{t("exam-fail")}</h1>
      <p>{t("advise")}</p>
      <img width="200" src="/static/images/think-about.gif" />
      <p>
        <Link href="/exam">
          <button>{t("try-again")}</button>
        </Link>
      </p>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </section>
  );
};
