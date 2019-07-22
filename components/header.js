const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 100);

export default ({ refs }) => (
  <>
    <header>
      <h1 href="https://xgohorse.com/" rel="home" className="title">
        xGoHorse
      </h1>
      {/* <nav>
        <ul>
          <li
            onClick={() => {
              scrollToRef(refs.refWhatIs);
            }}
          >
            <span>What is</span>
          </li>
          <li
            onClick={() => {
              scrollToRef(refs.refSpeed);
            }}
          >
            <span>Benchmark</span>
          </li>
          <li onClick={() => {}}>
            <span>Do the Exam</span>
          </li>
          <li onClick={() => {}}>
            <span>Shop</span>
          </li>
        </ul>
      </nav> */}
    </header>
    <style jsx>
      {`
        header {
          display: flex;
          z-index: 4;
          max-height: 50px;
          height: 100%;
          width: 100%;
          position: fixed;
          top: 0;
          color: white;
          background-color: white;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        }
        .title {
          background: url(/static/logo.png);
          text-indent: -99999px;
          width: 90px;
          height: 90px;
          box-shadow: 0 4px 8px 0px grey;
          border-radius: 65px;
          background-repeat: no-repeat;
          background-size: contain;
          padding: 0;
          margin: 8px;
          background-color: white;
        }
        @media screen and (max-width: 900px) {
          .title {
            width: 90px;
            height: 90px;
            margin: 8px;
          }
        }

        ul,
        li {
          cursor: pointer;
          list-style-type: none;
        }
        ul {
          display: flex;
          padding: 10px;
        }
        li {
          font-family: Weston;
          text-transform: uppercase;
          color: black;
          margin: 0 8px;
        }
        li span {
          padding: 10px 5px;
        }
        nav {
          margin-left: auto;
        }
      `}
    </style>
  </>
);
