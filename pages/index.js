import { Head, Axiom } from "../components";
import Router from "next/router";
import Link from "next/link";

const Go = () => {
  const name = prompt("🐴💬 \nEnter your name:", "");
  if (name == null || name == "") {
    alert("PROVIDE THE NAME!  ");
  } else {
    alert(
      "🐴💬\n LET'S GO 😀 \n ⚠️YOU HAVE ⏰ 02 MINUTES AND 34 SECONDS ⏰ TO ANSWER THIS EXAM ⚠️ "
    );
    Router.push({ pathname: "/exam", query: { name } }, "/exam");
  }
};

export default () => (
  <div className="content">
    <Head title="XGH Certification" />
    <table>
      <tbody>
        <tr>
          <td>
            <img className="full-w" width="600" src="/static/title2.png" />
          </td>
        </tr>
      </tbody>
    </table>
    <img className="logo" width="250" src="/static/logo.png" />
    <section>
      <p>
        <marquee className="get-certification">
          UNBELIEVABLE! SHOCKING! NOW AVAILABLE! MUST HAVE! GOOD FOR BIG DATA,
          HTML5, CSS3, BLOCKCHAIN, MACHINELEARNING, DATASCIENCE, CHATBOT, IOT,
          DEVOPS, VR, DRONES, ANALYTICS, MICROSERVICES, GAMIFICATION
        </marquee>
      </p>
      <p align="center" className="blink certificate">
        GET YOUR CERTIFICATION NOW!!!
      </p>
      {/* <Link href="/exam"> */}
      {/* <a>Go Now</a> */}
      {/* </Link> */}
      <button onClick={Go}>🐴 Go Horse Now</button>
    </section>
    <section className="axioms">
      <h3>DON'T YOU KNOW WHAT XGH IS ?</h3>
      <img src="/static/axioms.gif" />
      <Axiom />
    </section>
    <section className="speed-container">
      <h3 align="center">SPEED COMPARISON</h3>
      <p>Just how fast EXTREME GO HORSE really is:</p>
      <div className="speed-comparison">
        <div className="finish">FINISH</div>
        <div className="running-track">
          <marquee className="grass">🐎 ITIL</marquee>
          <marquee className="grass" scrolldelay="55" truespeed="55">
            🐎 SCRUM
          </marquee>
          <marquee className="xgh-horse grass" scrolldelay="15" truespeed="15">
            🎠 EXTREME GOHORSE
          </marquee>
          <marquee className="grass">🐎COBIT</marquee>
          <marquee scrollamount="2" direction="right">
            PMBOK 🐎
          </marquee>
        </div>
      </div>
    </section>
    <section>
      <h3>CERTIFIED XGH USERS</h3>
    </section>
    <section>
      <h3>CERTIFIED XGH COMPANIES</h3>
    </section>
    <footer>
      {/* <Link href="/termsofservice">
        <a>Share your story with us</a>
      </Link> */}
      <Link href="/termsofservice">
        <a>Terms of Service</a>
      </Link>
      <Link href="/termsofservice">
        <a>Contact us</a>
      </Link>
    </footer>
    <style jsx>
      {`
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        table {
          border-style: double;
          border-right-width: 0;
          border-left-width: 0;
        }
        img {
          background: white;
        }
        .full-w {
          width: 100vw;
        }
        .logo {
          border-width: 7px;
          border-style: outset;
          border-color: gold;
        }
        .grass {
          border-bottom: 1px solid green;
        }
        .axioms {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 35px 0;
        }
        .xgh-horse {
          color: white;
          text-shadow: 1px 1px 3px gray;
        }
        .get-certification {
          background-color: blue;
          color: yellow;
        }
        .certificate {
          background-color: red;
          color: blue;
          font-weight: bold;
        }
        button {
          width: 100vw;
          height: 65px;
          font-size: 20px;
          text-shadow: 1px 2px 3px red;
          color: yellow;
        }
        .speed-container {
          width: 100vw;
          margin: 20px 0;
        }
        .speed-comparison {
          width: 100%;
          display: flex;
          background-color: burlywood;
        }
        .speed-comparison .finish {
          display: block;
          z-index: 2;
          width: 0px;
          color: black;
          padding-right: 20px;
          padding-left: 20px;
          background-color: #ffffff;
          word-break: break-all;
          box-shadow: 2px 3px 5px lightslategrey;
        }
        .speed-comparison .running-track {
          flex: 1;
        }
        footer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-top: 1px solid gray;
          background-color: white;
          height: 200px;
          width: 100vw;
          padding: 15px;
        }
      `}
    </style>
  </div>
);
