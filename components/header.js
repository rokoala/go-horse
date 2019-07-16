const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 100);

export default ({ refs }) => (
  <>
    <header>
      <h1 href="https://xgohorse.com/" rel="home" className="title">
        xGoHorse
      </h1>
      <nav>
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
      </nav>
    </header>
    <style jsx>
      {`
        header {
          display: flex;
          z-index: 3;
          max-height: 4.5rem;
          height: 100%;
          width: 100%;
          background-color: black;
          position: fixed;
          top: 0;
          color: white;
        }
        .title {
          background: url(/static/logo.png);
          text-indent: -99999px;
          width: 110px;
          height: 110px;
          box-shadow: 0 4px 8px 0px grey;
          border-radius: 65px;
          background-repeat: no-repeat;
          background-size: contain;
          padding: 0;
          margin: 18px 50px;
          background-color: white;
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
          font-weight: bold;
          color: gold;
          margin: 0 8px;
        }
        li span {
          padding: 1.8rem 1rem;
          font-size: 1rem;
        }
        nav {
          margin-left: auto;
        }
      `}
    </style>
  </>
);
