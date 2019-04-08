import Head from "next/head";
import { withTranslation } from "react-i18next";

const CustomHead = ({ title, t }) => (
  <div>
    <Head>
      <script
        async
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/static/logo/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/static/logo/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/static/logo/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/logo/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/static/logo/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/static/logo/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/static/logo/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/static/logo/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/logo/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/static/logo/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/logo/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/static/logo/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/logo/favicon-16x16.png"
      />
      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="manifest" href="/static/logo/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta content={t("description")} name="description" />
      <meta
        name="google-site-verification"
        content="147-nQUSKLX1iEG5VD9ByUCwyNW4i2JmMUd8OlOcrOY"
      />
      <meta
        name="msapplication-TileImage"
        content="/static/logo/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <title>{title}</title>
    </Head>
    <style jsx global>
      {`
        * {
          box-sizing: border-box;
        }
        body::before {
          width: 100%;
          height: 100%;
          display: block;
          position: fixed;
          left: 0;
          top: 0;
          z-index: -1;
          content: " ";
          background: url(/static/logo.png) repeat;
          background-size: 200px;
          opacity: 0.1;
        }
        body {
          margin: 0;
          animation: animate 0.25s infinite;
        }
        button,
        input,
        label {
          cursor: inherit;
        }
        @keyframes animate {
          0% {
            cursor: url("/static/cursor/1.png"), auto;
          }
          20% {
            cursor: url("/static/cursor/2.png"), auto;
          }
          40% {
            cursor: url("/static/cursor/3.png"), auto;
          }
          60% {
            cursor: url("/static/cursor/4.png"), auto;
          }
          80% {
            cursor: url("/static/cursor/5.png"), auto;
          }
          100% {
            cursor: url("/static/cursor/6.png"), auto;
          }
        }

        blink,
        .blink {
          -webkit-animation: blink 1s step-end infinite;
          -moz-animation: blink 1s step-end infinite;
          -o-animation: blink 1s step-end infinite;
          animation: blink 1s step-end infinite;
        }

        @-webkit-keyframes blink {
          67% {
            opacity: 0;
          }
        }

        @-moz-keyframes blink {
          67% {
            opacity: 0;
          }
        }

        @-o-keyframes blink {
          67% {
            opacity: 0;
          }
        }

        @keyframes blink {
          67% {
            opacity: 0;
          }
        }

        @import url("https://fonts.googleapis.com/css?family=Cedarville+Cursive");
      `}
    </style>
  </div>
);

export default withTranslation("head")(CustomHead);
