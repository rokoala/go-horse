import React from "react";
import { withRouter } from "next/router";
import {
  Head,
  SpecialResult,
  FailureResult,
  Result,
  Donate
} from "../components";

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
    router.push("/");
  }

  return (
    <div className="content">
      <Head title="XGH Certification" />
      <header>
        <h1>
          <a href="/">eXtreme GoHorse Certification</a>
        </h1>
      </header>
      {userResult}
      <div className="donate">
        <Donate />
      </div>
      <style jsx>
        {`
          header {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          .content {
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100vh;
          }
          .donate {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: auto;
            padding: 25px;
            background-color: white;
            border: 1px solid rgba(0, 0, 0, 0.09);
          }
        `}
      </style>
    </div>
  );
});
