import React from "react";
import { withRouter } from "next/router";
import { Head, SpecialResult, FailureResult, Result } from "../components";
import AdSense from "react-adsense";
const adclient = "ca-pub-1462658131006885";

export default withRouter(({ router }) => {
  let userResult;

  if (router.query.failure || router.query.result < 3) {
    userResult = <FailureResult />;
  } else if (router.query.name && router.query.finish) {
    userResult = <SpecialResult name={router.query.name} />;
  } else if (router.query.name && router.query.result) {
    userResult = (
      <Result name={router.query.name} result={router.query.result} />
    );
  } else {
    if (typeof window !== "undefined") router.push("/");
  }

  return (
    <>
      <div className="content">
        <Head title="XGH Certification" />
        <header>
          <h1>
            <a href="/">eXtreme GoHorse Certification</a>
          </h1>
        </header>
        {userResult}
        <style jsx>
          {`
            header {
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
            }
            .content {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            }
            h1 {
              font-family: Weston;
              color: brown;
            }
          `}
        </style>
      </div>{" "}
      <AdSense.Google
        client={adclient}
        slot="2917452006"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
      />
    </>
  );
});
