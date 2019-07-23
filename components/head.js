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
      <meta property="og:site_name" content="xGoHorse Certification" />
      <meta property="og:title" content="xGoHorse Certification" />
      <meta property="og:description" content="xGoHorse Certification" />
      <meta
        property="og:image"
        itemprop="image"
        content="https://xgohorse.com/static/logo.png"
      />
      <meta property="og:type" content="website" />
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
        @import url("https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap");

        * {
          box-sizing: border-box;
          text-rendering: optimizeLegibility !important;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: "Quicksand", sans-serif;
          margin: 0;
          padding-top: 50px;
        }

        @font-face {
          font-family: NexaRust;
          src: url("/static/fonts/NexaRust.otf");
        }
        @font-face {
          font-family: Weston;
          src: url("/static/fonts/WestonFree-Regular.otf");
        }
        @font-face {
          font-family: Weston;
          font-weight: 100;
          src: url("/static/fonts/WestonFree-Light.otf");
        }

        section {
          display: flex;
          flex-direction: column;
          flex-align: center;
          align-items: center;
          font-size: 1rem;
          padding: 30px 0;
          color: black;
        }
        .section-title {
          font-size: 20px;
          text-transform: uppercase;
          font-family: Weston;
          text-align: center;
        }
        .section-title:after {
          border-bottom: 3px double #981c1c;
          content: "";
          display: block;
          height: 1px;
          margin: 5px auto;
          opacity: 0.5;
          width: 300px;
        }
      `}
    </style>
  </div>
);

export default withTranslation("head")(CustomHead);
