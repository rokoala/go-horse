import { withTranslation } from "react-i18next";
import { Head, Axiom, Donate, Books, SharePage } from "../components";
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
    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-1462658131006885",
      enable_page_level_ads: true
    });
    ReactGA.initialize("UA-137508594-1");
    ReactGA.pageview(document.location.pathname);
    this.setState({ language: i18n.language });
  }
  go = () => {
    // retry
    const { t } = this.props;

    const name = prompt(t("enter-name"), "");
    if (name == null || name == "") {
      alert(t("provide-name"));
    } else {
      alert(t("time-alert"));
      Router.push({ pathname: "/exam", query: { name } }, "/exam");
    }
  };
  buy = () => {
    window.open(
      "https://produto.mercadolivre.com.br/MLB-1270404740-caneca-go-horse-certified-professional-_JM",
      "_blank"
    );
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
        <section className="full-w flex-center">
          <p style={{ width: "100%" }}>
            <marquee className="get-certification">{t("marquee")}</marquee>
          </p>
          <p align="center" className="blink certificate">
            {t("get-now")}
          </p>
          <button className="go-btn" onClick={this.go}>
            {"🐴 Go Horse Now!!!!"}
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
        <section className="buy">
          <a
            target="_blank"
            href="https://produto.mercadolivre.com.br/MLB-1270404740-caneca-go-horse-certified-professional-_JM"
          >
            <h2>COMPRE SUA CANECA GO HORSE!!!</h2>
          </a>
          <img
            width="400px"
            src="https://http2.mlstatic.com/caneca-go-horse-certified-professional-D_NQ_NP_898720-MLB30696159675_052019-F.webp"
          />
          <button onClick={this.buy}>Compre!</button>
        </section>
        <section className="certified">
          <h2>{t("certified-users")}</h2>
          <div className="certified-users">
            <a
              target="_blank"
              className="user user-1"
              href="https://web.facebook.com/andrelgouveia"
            />
            <a
              target="_blank"
              className="user user-2"
              href="https://www.instagram.com/mdmansur25/"
            />
          </div>
        </section>
        <footer>
          <Link href={"/termsofservice-" + this.state.language}>
            <a>{t("terms-of-service")}</a>
          </Link>
          <a href="mailto:xghcertification@gmail.com">{t("contact-us")}</a>
          <Donate />
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
            .buy {
              display: flex;
              flex-direction: column;
              margin: 4rem 0;
            }
            .go-btn {
              width: 200px;
            }
            .flex-center {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
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
              margin: 5px;
              width: 85px;
              height: 85px;
              border-radius: 50%;
              background-size: cover;
            }
            .user-1 {
              background-image: url("https://scontent.fcgh20-1.fna.fbcdn.net/v/t31.0-8/14324618_10210739180186545_863292494099771014_o.jpg?_nc_cat=102&_nc_oc=AQkIL6ZQ3eqePHmq7sdUL3apwt1ABrKygolI9EJV0Ed8n3Wik8PqCIPG6DEyRLd8PLyQOQCEGcKa96z1VQFmhyn6&_nc_ht=scontent.fcgh20-1.fna&oh=f00a4ce36f8491f0c9c9797ff4780f67&oe=5D79A3FC");
            }
            .user-2 {
              background-image: url("https://instagram.fcgh4-1.fna.fbcdn.net/vp/f12d1102fd7acbd55846ef7bcb6c6817/5D3EA2FB/t51.2885-19/s320x320/43140377_308469339955098_8334936018494947328_n.jpg?_nc_ht=instagram.fcgh4-1.fna.fbcdn.net");
            }
            .certified {
              margin: 25px 0;
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
