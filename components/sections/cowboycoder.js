import { withTranslation } from "react-i18next";

const CowboyCoder = ({ t }) => (
  <section>
    <h3 className="section-title">{t("cowboy-coder-title")}</h3>
    <article>
      <h4 className="title">= Cowboy Coder =</h4>
      <div className="content">
        <img src="/static/images/cowboy-coder.svg"></img>
        <p className="description">
          <span>{t("cowboy-coder-description")}</span>{" "}
          <a className="reference" href="https://wapu.us/wapuu/cowboy-coder/">
            Wapuus
          </a>
        </p>
      </div>
    </article>
    <article>
      <h4 className="title">= Programming Mother***cker =</h4>
      <p className="description mf-description">
        "We are a community of *** programmers who have been humiliated by
        software development methodologies for years. We are tired of XP, Scrum,
        Kanban, Waterfall, Software Craftsmanship (aka XP-Lite) and anything
        else getting in the way of..." {<br />}
        <a className="reference" href="http://programming-motherfucker.com/">
          Programming Mother***cker
        </a>
      </p>
    </article>
    <style jsx>
      {`
        article {
          margin: 20px 0;
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
            width: 280px;
          }
        }
        .description {
          font-size: 20px;
          margin: 30px;
          text-align: center;
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
          margin: 5px 0;
          font-weight: bold;
          color: brown;
        }
      `}
    </style>
  </section>
);

export default withTranslation("all")(CowboyCoder);
