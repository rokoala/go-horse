import { withTranslation } from "react-i18next";
import { Head, Axiom, Books, SharePage } from "../components";
import ReactGA from "react-ga";
import Router from "next/router";
import Link from "next/link";

class Index extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      language: "en"
    };
  }
  componentDidMount() {
    const { i18n } = this.props;
    ReactGA.initialize("UA-137508594-1");
    ReactGA.pageview(document.location.pathname);
    this.setState({ language: i18n.language });
  }
  go = () => {
    const { t } = this.props;

    const name = prompt(t("enter-name"), "");
    if (name == null || name == "") {
      alert(t("provide-name"));
    } else {
      alert(t("time-alert"));
      Router.push({ pathname: "/exam", query: { name } }, "/exam");
    }
  };
  handleLanguage = () => {
    const { i18n } = this.props;
    i18n.changeLanguage(event.target.value);
    this.setState({ language: event.target.value });
  };
  render() {
    const { t } = this.props;

    return (
      <div className="content">
        <Head title="XGH Certification" />
        <div className="language">
          <select value={this.state.language} onChange={this.handleLanguage}>
            <option value="en">English</option>
            <option value="pt">Português</option>
          </select>
          <span>{t("language")}</span>
        </div>
        <table className="full-w">
          <tbody>
            <tr>
              <td>
                <img className="full-w" src="/static/images/title.png" />
              </td>
            </tr>
          </tbody>
        </table>
        <img className="logo" width="250" src="/static/logo.png" />
        <section className="full-w">
          <p>
            <marquee className="get-certification">{t("marquee")}</marquee>
          </p>
          <p align="center" className="blink certificate">
            {t("get-now")}
          </p>
          <button className="full-w" onClick={this.go}>
            🐴 Go Horse
          </button>
        </section>
        <section className="axioms">
          <h3>{t("what-xgh")}</h3>
          <img className="axioms-img" src="/static/images/axioms.gif" />
          <Axiom />
        </section>
        <section className="speed-container">
          <h3 align="center">{t("speed-comparison")}</h3>
          <p align="center" className="sm-margin">
            {t("how-speed-comparison")}
          </p>
          <div className="speed-comparison">
            <div className="finish">FINISH</div>
            <div className="running-track">
              <marquee className="grass">🐎 ITIL</marquee>
              <marquee className="grass" scrolldelay="55" truespeed="55">
                🐎 SCRUM
              </marquee>
              <marquee
                className="xgh-horse grass"
                scrolldelay="15"
                truespeed="15"
              >
                🎠 EXTREME GOHORSE
              </marquee>
              <marquee className="grass">🐎COBIT</marquee>
              <marquee scrollamount="2" direction="right">
                PMBOK 🐎
              </marquee>
            </div>
          </div>
        </section>
        <section className="books">
          <Books />
        </section>
        <section>
          <button onClick={this.go}>🐴 {t("go-certificate")}</button>
        </section>
        <section>
          <h2>{t("certified-users")}</h2>
          <div className="certified-users">
            <a
              target="_blank"
              className="user user-1"
              href="https://web.facebook.com/andrelgouveia"
            />
          </div>
        </section>
        <footer>
          <Link href={"/termsofservice-" + this.state.language}>
            <a>{t("terms-of-service")}</a>
          </Link>
          <a href="mailto:xghcertification@gmail.com">{t("contact-us")}</a>
          <div className="share-buttons">
            <SharePage />
          </div>
        </footer>
        <style jsx>
          {`
            .content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .language {
              margin-left: auto;
              margin-top: 20px;
              margin-bottom: 15px;
              margin-right: 20px;
              display: flex;
              flex-direction: column;
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
              width: 100%;
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
            .axioms-img {
              width: 80%;
              max-width: 400px;
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
              height: 65px;
              font-size: 20px;
              text-shadow: 1px 2px 3px red;
              color: yellow;
            }
            .sm-margin {
              margin: 10px;
            }
            .speed-container {
              width: 100%;
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
            .share-buttons {
              display: flex;
              margin-top: 15px;
            }
            section.books {
              margin: 50px 0;
            }
            .user {
              display: block;
              width: 85px;
              height: 85px;
              border-radius: 50%;
              background-size: cover;
            }
            .user-1 {
              background-image: url("https://scontent.fcgh5-1.fna.fbcdn.net/v/t31.0-8/14324618_10210739180186545_863292494099771014_o.jpg?_nc_cat=102&_nc_eui2=AeHXUmZrjZhY_JGYwJQ8085jTZsS386F6Mmzoe8undIoexIEnA_C6HQwqPvm86T6sjJaueTQ_4RFGy404viI9Gcol6Ob4WnNB51idWM-bHVy7g&_nc_ht=scontent.fcgh5-1.fna&oh=b4b3a7dbe99ef3f5df7c398b6436a631&oe=5D02FCFC");
            }
            .certified-users {
              align-items: center;
              flex-direction: row;
              justify-content: center;
              display: flex;
            }
            footer {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-top: 20px;
              align-items: center;
              border-top: 1px solid gray;
              background-color: white;
              height: 200px;
              width: 100%;
              padding: 15px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default withTranslation("index")(Index);
