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
      `}
    </style>
  </div>
);
