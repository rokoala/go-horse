import React from "react";
import Link from "next/link";
import { withNamespaces } from "../i18n";
import { withRouter } from "next/router";
import { Head } from "../components";
import SimpleCrypto from "simple-crypto-js";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  EmailShareButton
} from "react-share";

class Certificate extends React.PureComponent {
  state = {
    userkey: "",
    showShareButtons: true
  };
  getFormattedDate = () => {
    const todayTime = new Date();
    const month = todayTime.getMonth();
    const day = todayTime.getDate();
    const year = todayTime.getFullYear();
    return day + "/" + month + "/" + year;
  };
  componentDidMount() {
    const { router } = this.props;

    if (router.query.user) {
      this.setState({ showShareButtons: false });
      router.query.name = simpleCrypto.decrypt(router.query.user);
    } else {
      const plainText = router.query.name || "";
      simpleCrypto.encrypt(plainText);
      var cipherText = simpleCrypto.encrypt(plainText);
      this.setState({
        userkey: cipherText
      });
    }
  }
  render() {
    const { t, router } = this.props;
    return (
      <div className="content">
        <Head title="XGH Certification" />
        <div className="certificate">
          <div className="cursive">{t("this-certify")}</div>
          <div className="wrong cursive">Bruce Wayne</div>
          <h2 className="cursive">{router.query.name}</h2>
          <div className="cursive">{t("has-achieved")}</div>
          <div className="wrong cursive">COBiT Foundation</div>
          <div className="go-horse-title">
            eXtreme GoHorse Process Certificate
          </div>
          <img width="200" src="/static/logo.png" />
          <p>
            <b>{t("effective-from")}</b>
          </p>
          <div>{this.getFormattedDate()}</div>
          <p>
            <b>{t("candidate-number")}</b>
          </p>
          <div>309405998100203112989</div>
          <p>
            <b>{t("certificate-number")}</b>
          </p>
          <div>580492094808472343558</div>
        </div>
        {this.state.showShareButtons ? (
          <section className="share-content">
            <h3>{t("share")}</h3>
            <div className="share-buttons">
              <a
                href={`https://wa.me/?text=Olha+ae+meu+certificado+eXtremeGoHorse%0D%0Ahttp%3A%2F%2F192.168.1.18%3A3000%2Fcertificate%3Fuser%3D${
                  this.state.userkey
                }`}
                className="whatsapp"
              />
              <FacebookShareButton
                url={`http://192.168.1.18:3000/certificate?user=${
                  this.state.userkey
                }`}
                quote={`I am a eXtreme GoHorse Certified now!`}
              >
                FACEBOOKS
              </FacebookShareButton>

              <CopyToClipboard
                text={`http://192.168.1.18:3000/certificate?user=${
                  this.state.userkey
                }`}
              >
                <button>LINKZAO</button>
              </CopyToClipboard>
            </div>
            <div style={{ marginBottom: 25 }}>
              <button>{t("back")}</button>
            </div>
          </section>
        ) : (
          <button className="want">
            <Link href="/">
              <blink>{t("want")}</blink>
            </Link>
          </button>
        )}

        <style jsx>
          {`
            @import url("https://fonts.googleapis.com/css?family=Cedarville+Cursive");
            img {
              background-color: white;
              border-style: outset;
              border-color: gold;
            }
            .content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
            .wrong {
              text-decoration: line-through;
            }
            .certificate {
              border: 1px solid gray;
              padding: 40px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background-color: #c5b15669;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23edf0dd' fill-opacity='0.54'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
            }
            h1 {
              font-family: "Cedarville Cursive", cursive;
            }
            .share-content {
              display: flex;
              align-items: center;
              flex-direction: column;
            }
            .share-buttons {
              display: flex;
              margin-bottom: 20px;
            }
            .whatsapp {
              background-image: url("/static/images/whatsapp.png");
              display: block;
              width: 35px;
              height: 35px;
              background-size: contain;
              background-repeat: no-repeat;
            }
            .cursive {
              font-family: "Cedarville Cursive", cursive;
              font-size: 3rem;
            }
            .go-horse-title {
              font-family: "Cedarville Cursive", cursive;
              color: red;
              font-size: 3rem;
              text-shadow: 1px 1px 1px #4a4141;
              margin-bottom: 20px;
            }
            .want {
              margin: 20px;
              width: 200px;
              height: 100px;
              font-size: 18px;
            }
          `}
        </style>
      </div>
    );
  }
}

Certificate.getInitialProps = async () => {
  return {
    namespacesRequired: ["certificate"]
  };
};

export default withNamespaces("certificate")(withRouter(Certificate));

const simpleCrypto = new SimpleCrypto(
  "lkkgelasaoenglskjsugjlsiekajsthisisforyouthatarelookingforthecodeandhavecheckthatthisisareallymessybutitsintenttobelijk"
);
