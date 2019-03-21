import React from "react";
import Link from "next/link";
import { i18n, withNamespaces } from "../i18n";

const failureResult = ({ t }) => (
  <section>
    <h1>{t("exam-fail")}</h1>
    <p>{t("advise")}</p>
    <img width="200" src="/static/think-about.gif" />
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

failureResult.getInitialProps = async () => {
  return {
    namespacesRequired: ["result"]
  };
};

export default withNamespaces("result")(failureResult);
