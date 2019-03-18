import Head from "next/head";

export default ({ title }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/static/logo.ico" />
      <title>{title}</title>
    </Head>
    <style jsx global>
      {`
        body::before {
          width: 100%;
          height: 100%;
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          z-index: -1;
          content: " ";
          background: url(/static/logo.png) repeat;
          background-size: 200px;
          opacity: 0.1;
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
      `}
    </style>
  </div>
);
