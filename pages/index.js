import { Head } from "../components";
import Link from "next/link";

export default () => (
  <section>
    <Head title="XGH Certification" />
    <img width="600" src="/static/title2.png" />
    <img className="logo" width="250" src="/static/logo.png" />
    <marquee>
      UNBELIEVABLE! SHOCKING! MUST HAVE! GOOD FOR BIG DATA, HTML5, CSS3,
      BLOCKCHAIN, MACHINELEARNING, DATASCIENCE, CHATBOT, IOT, DEVOPS, VR,
      DRONES, ANALYTICS, MICROSERVICES, GAMIFICATION
    </marquee>
    <div className="blink certificate">GET YOUR CERTIFICATION FOR FREE!!!</div>
    <br />
    <Link href="/start">
      <a>Go Now</a>
    </Link>
    <h3>CERTIFIED COMPANIES</h3>
    <style jsx>
      {`
        img {
          background: white;
        }
        .logo {
          border: 1px solid red;
        }
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .certificate {
          background-color: red;
          color: blue;
          font-weight: bold;
        }
      `}
    </style>
  </section>
);
