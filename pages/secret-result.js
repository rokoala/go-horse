import React from "react";
import { Head, Donate } from "../components";

export default () => (
  <React.Fragment>
    <Head title="XGH Certification" />
    <section>
      <h1>Congratulations</h1>
      <h2>You have unlock the SECRET result!</h2>
      <h3>You don't need score</h3>
      <img width="200" src="/static/hackerman.jpg" />
      <button>Print your certificate</button>
      <div className="donate">
        <Donate />
      </div>
    </section>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .donate {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </React.Fragment>
);
