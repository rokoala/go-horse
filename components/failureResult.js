import React from "react";
import Link from "next/link";

export default () => (
  <section>
    <h1>EXAM FAIL</h1>
    <p>Remember XGH... Think about no thinking</p>
    <img width="200" src="/static/think-about.gif" />
    <p>
      <Link href="/exam">
        <button>Try again</button>
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
