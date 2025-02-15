import { withTranslation } from "react-i18next";
import Link from "next/link";
import { withRouter } from "next/router";
import { Head } from "../components";
import SimpleCrypto from "simple-crypto-js";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  EmailShareButton
} from "react-share";

const API_URL = "https://xgohorse.com";

const getParams = function(url) {
  var params = {};
  var parser = document.createElement("a");
  parser.href = url;
  var query = parser.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
};

class Certificate extends React.PureComponent {
  state = {
    userkey: "",
    name: "",
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

    const user = getParams(window.location.href).user;

    if (user) {
      this.setState({ name: simpleCrypto.decrypt(decodeURIComponent(user)) });
      this.setState({ showShareButtons: false });
    } else {
      const plainText = router.query.name || "";
      this.setState({ name: router.query.name });
      simpleCrypto.encrypt(plainText);
      var cipherText = simpleCrypto.encrypt(plainText);
      this.setState({
        userkey: encodeURIComponent(cipherText)
      });
    }
  }
  render() {
    const { t } = this.props;
    return (
      <div className="content">
        <Head title="XGH Certification" />
        <div className="certificate">
          <div className="cursive">{t("this-certify")}</div>
          <h2 className="cursive name">{this.state.name}</h2>
          <div className="cursive">{t("has-achieved")}</div>
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
          <div className="share-content">
            <h3>{t("share")}</h3>
            <div className="share-buttons">
              <a
                href={`https://api.whatsapp.com/send?text=http%3A%2F%2Fxgohorse.com%2Fcertificate%3Fuser%3D${this.state.userkey}`}
                target="_blank"
                className="whatsapp"
              />
              <FacebookShareButton
                url={`${API_URL}/certificate?user=${this.state.userkey}`}
                quote={t("quote")}
              >
                <svg viewBox="0 0 64 64" width="32" height="32">
                  <g>
                    <circle cx="32" cy="32" r="31" fill="#3b5998" />
                  </g>
                  <g>
                    <path
                      d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                      fill="white"
                    />
                  </g>
                </svg>
              </FacebookShareButton>

              <TelegramShareButton
                url={`${API_URL}/certificate?user=${this.state.userkey}`}
                quote={t("quote")}
              >
                <svg viewBox="0 0 64 64" width="32" height="32">
                  <g>
                    <circle cx="32" cy="32" r="31" fill="#37aee2" />
                  </g>
                  <g>
                    <path
                      d="m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"
                      fill="white"
                    />
                  </g>
                </svg>
              </TelegramShareButton>
              <LinkedinShareButton
                url={`${API_URL}/certificate?user=${this.state.userkey}`}
                quote={t("quote")}
              >
                <svg viewBox="0 0 64 64" width="32" height="32">
                  <g>
                    <circle cx="32" cy="32" r="31" fill="#007fb1" />
                  </g>
                  <g>
                    <path
                      d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                      fill="white"
                    />
                  </g>
                </svg>
              </LinkedinShareButton>

              <TwitterShareButton
                url={`${API_URL}/certificate?user=${this.state.userkey}`}
                quote={t("quote")}
              >
                <svg viewBox="0 0 64 64" width="32" height="32">
                  <g>
                    <circle cx="32" cy="32" r="31" fill="#00aced" />
                  </g>
                  <g>
                    <path
                      d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                      fill="white"
                    />
                  </g>
                </svg>
              </TwitterShareButton>
              <RedditShareButton
                url={`${API_URL}/certificate?user=${this.state.userkey}`}
                quote={t("quote")}
              >
                <svg viewBox="0 0 64 64" width="32" height="32">
                  <g>
                    <circle cx="32" cy="32" r="31" fill="#5f99cf" />
                  </g>
                  <g>
                    <path
                      d="m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"
                      fill="white"
                    />
                  </g>
                </svg>
              </RedditShareButton>
              <EmailShareButton
                url={`${API_URL}/certificate?user=${this.state.userkey}`}
                quote={t("quote")}
              >
                <svg viewBox="0 0 64 64" width="32" height="32">
                  <g>
                    <circle cx="32" cy="32" r="31" fill="#7f7f7f" />
                  </g>
                  <g>
                    <path
                      d="M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
                      fill="white"
                    />
                  </g>
                </svg>
              </EmailShareButton>
            </div>
            <p>
              <CopyToClipboard
                text={`${API_URL}/certificate?user=${this.state.userkey}`}
              >
                <button>{t("copy")}</button>
              </CopyToClipboard>
              <button onClick={() => window.print()}>{t("print")}</button>
            </p>
            <div>
              <Link href="/">
                <button>{t("back")}</button>
              </Link>
            </div>
          </div>
        ) : (
          <button className="want">
            <Link href="/">
              <div className="blink">{t("want")}</div>
            </Link>
          </button>
        )}

        <style jsx>
          {`
            img {
              background-color: white;
              margin: 5px 0;
              border-style: outset;
              border-radius: 50%;
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
              padding: 35px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background-color: #e8d78969;
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
              align-content: space-between;
              margin-bottom: 10px;
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
              font-size: 1.8rem;
            }
            .go-horse-title {
              font-family: "Cedarville Cursive", cursive;
              color: #963030;
              font-size: 2rem;
              margin: 20px 0;
            }
            .want {
              margin: 20px;
              width: 200px;
              height: 100px;
              font-size: 18px;
            }
            @media print {
              .share-content {
                display: none;
              }
              .name {
                margin: 0px;
                padding: 0px;
              }
              .go-horse-title {
                margin: 0px;
              }
              html {
                background-color: #ffdeb3 !important;
              }
              body {
                padding-top: 0 !important;
                background-color: #ffdeb3 !important;
              }
              .content {
                margin-top: 0;
              }
              .certificate {
                width: 100%;
                height: 100vh;
              }
              .cursive {
                font-size: 2.5rem;
              }
              .go-horse-title {
                font-size: 3rem;
              }
              .name {
                line-height: 6rem;
              }
              * {
                font-size: 1.5rem;
              }
            }
          `}
        </style>
        <style jsx global>
          {`
            @media print {
              body::before {
                content: none;
                background-color: #ffdeb3;
              }
              body {
                padding-top: 0 !important;
                background-color: #ffdeb3 !important;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default withTranslation("certificate")(withRouter(Certificate));

const simpleCrypto = new SimpleCrypto(
  "lkkgelasaoenglskjsugjlsiekajsthisisforyouthatarelookingforthecodeandhavecheckthatthisisareallymessybutitsintenttobelijk"
);
