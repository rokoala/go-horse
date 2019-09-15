import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

const CowboyCoder = ({ t }) => (
  <section>
    <h3 className="section-title">{t("cowboy-coder-title")}</h3>

    <div className="section-content">
      <Slide right>
        <article>
          <h4 className="title">Cowboy Coder</h4>
          <div className="content">
            <img src="/static/images/cowboy-coder.svg"></img>
            <p className="description">
              <span>{t("cowboy-coder-description")}</span>{" "}
              <a
                className="reference"
                href="https://wapu.us/wapuu/cowboy-coder/"
              >
                Wapuus
              </a>
            </p>
          </div>
        </article>
      </Slide>
      <Slide left>
        <article>
          <h4 className="title">Programming Mother***cker</h4>
          <p className="description mf-description">
            "We are a community of *** programmers who have been humiliated by
            software development methodologies for years. We are tired of XP,
            Scrum, Kanban, Waterfall, Software Craftsmanship (aka XP-Lite) and
            anything else getting in the way of..."
          </p>
          <a
            className="reference reference-pmf"
            href="http://programming-motherfucker.com/"
          >
            Programming Mother***cker
          </a>
        </article>
      </Slide>
    </div>

    <style jsx>
      {`
        .section-content {
          display: flex;
          width: 100%;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
        article {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #f3eccb;
          margin: 15px;
          padding: 30px;
          max-width: 650px;
          text-align: center;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.09);
        }
        .content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin: 25px 0;
        }
        @media screen and (max-width: 600px) {
          img {
            width: 210px;
          }
        }
        @media screen and (min-width: 600px) {
          img {
            width: 250px;
          }
        }
        .description {
          font-size: 20px;
          padding: 15px;
          text-align: center;
        }
        .reference-pmf {
          font-size: 20px;
        }
        .mf-description {
          max-width: 750px;
        }
        .reference {
          font-weight: bold;
          text-decoration: none;
        }
        .title {
          font-family: Weston;
          text-align: center;
          font-size: 22px;
          margin: 20px 0;
          font-weight: bold;
          color: brown;
        }
      `}
    </style>
  </section>
);

export default withTranslation("all")(CowboyCoder);
