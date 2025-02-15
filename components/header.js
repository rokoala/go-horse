import { withTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 100);

const Header = ({ refs, t, i18n }) => {
  const [language, setLanguage] = useState(i18n.language);
  const [prevScrollpos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleLanguage = () => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      const language =
        i18n.language.toLowerCase() === "pt-br"
          ? "pt"
          : i18n.language.toLowerCase();
      i18n.changeLanguage(language);
    }, 200);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollpos > currentScrollPos;
    setPrevScrollPos(window.pageYOffset);
    setVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <header className={!visible && "hide"}>
        <h1 href="https://xgohorse.com/" rel="home" className="title">
          xGoHorse
        </h1>
        <div className="language">
          <select value={language} onChange={handleLanguage}>
            <option value={"en"}>English</option>
            <option value={"pt"}>Português</option>
          </select>
          <span>{t("language")}</span>
        </div>
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
            background-color: black;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
            transition: all 0.5s ease 0s;
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
          .language {
            margin-left: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .hide {
            top: -110px;
          }
          select {
            background-color: white;
          }
        `}
      </style>
    </>
  );
};

export default withTranslation("index")(Header);
