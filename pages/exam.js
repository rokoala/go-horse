import { withTranslation } from "react-i18next";
import { Head } from "../components";
import Link from "next/link";
import { withRouter } from "next/router";
import ReactGA from "react-ga";
import AdSense from "react-adsense";
const adclient = "ca-pub-1462658131006885";

const QUESTION_ACTION = {
  BACK: -1,
  NEXT: 1
};

class Exam extends React.PureComponent {
  state = {
    questions: [
      {
        title: "question0",
        items: ["item00", "item01", "item02", "item03"],
        answer: 2,
        selection: ""
      },
      {
        title: "question1",
        items: [
          "PMBOK",
          "SCRUM",
          "XP",
          "REACT",
          "COBIT",
          "ANGULARJS",
          "LARAVEL",
          "ANALYTICS",
          "GROSELHA",
          "BIG DATA",
          "XGH",
          "ARTIFICIAL NEURAL NETWORKS",
          "CATOPTROMANCY",
          "DEIPNOSOPHIST",
          "UNICORN",
          "TAPIOCA",
          "CHARMANDER",
          "SPAGHETTIFICATION",
          "WIDDERSHINS"
        ],
        answer: 10,
        selection: ""
      },
      {
        title: "question2",
        items: ["item20", "item21", "item22", "item23", "item24"],
        answer: 4,
        selection: ""
      },
      {
        title: "GOHORSEは最高ですか。",
        items: ["SI 🐴", "لا", "может быть"],
        answer: 0,
        selection: ""
      },
      {
        title: "Refactoring?",
        items: ["YES", "yes", "No", "Y", "Only on mondays"],
        answer: 2,
        selection: ""
      }
    ],
    questionIndex: 0
  };
  componentDidMount() {
    ReactGA.initialize("UA-137508594-1");
    ReactGA.pageview(document.location.pathname);
  }
  result = () =>
    this.state.questions.reduce((prevVal, question) => {
      return (
        prevVal +
        (question.selection === question.items[question.answer] ? 1 : 0)
      );
    }, 0);
  handleClickQuestion = action => evt => {
    evt.preventDefault();
    const currentIndex = this.state.questionIndex;
    this.setState({ questionIndex: currentIndex + action });
  };
  handleClickFinish = evt => {
    evt.preventDefault();
    const { router } = this.props;
    const result = this.result();
    router.push({
      pathname: "/result",
      query: { result, name: router.query.name }
    });
  };
  handleRadio = evt => {
    const questions = [...this.state.questions];
    questions[this.state.questionIndex].selection = evt.currentTarget.value;

    this.setState({
      questions
    });
  };
  render() {
    const { router, t } = this.props;
    const { questions, questionIndex } = this.state;

    if (!router.query.name && typeof window !== "undefined") {
      router.push("/");
      return <div />;
    } else {
      return (
        <>
          <Head title="XGH Certification" />
          <section>
            <h2>
              {t("question")} #{questionIndex + 1}
            </h2>
            <div className="question">
              <b>{t(questions[questionIndex].title)}</b>
            </div>
            <div className="items">
              {questions[questionIndex].items.map((item, index) => (
                <React.Fragment key={`${index}`}>
                  <div className="input-wrapper">
                    <input
                      type="radio"
                      checked={questions[questionIndex].selection === item}
                      value={`${item}`}
                      id={`${index}`}
                      onChange={this.handleRadio}
                    />
                    <label htmlFor={`${index}`}>{t(item)}</label>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="buttons">
              {questionIndex > 0 && (
                <button
                  onClick={this.handleClickQuestion(QUESTION_ACTION.BACK)}
                >
                  {t("back")}
                </button>
              )}
              {questionIndex === questions.length - 1
                ? questions[questionIndex].selection !== "" && (
                    <button onClick={this.handleClickFinish}>
                      {t("finish")}
                    </button>
                  )
                : questions[questionIndex].selection !== "" && (
                    <button
                      onClick={this.handleClickQuestion(QUESTION_ACTION.NEXT)}
                    >
                      {t("next")}
                    </button>
                  )}
            </div>
            <style jsx>
              {`
                section {
                  display: flex;
                  margin: 20px;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }
                .question {
                  margin: 15px;
                }
                .items {
                  margin: 10px;
                }
                .input-wrapper {
                  margin: 15px 0px;
                }
                .buttons {
                  margin-bottom: 50px;
                }
              `}
            </style>
          </section>
          <AdSense.Google
            client={adclient}
            slot="6724162623"
            style={{ display: "block", width: "100%", textAlign: "center" }}
            format="auto"
            responsive="true"
          />
          <p className="just-finish">
            {questionIndex === 0 && questions[questionIndex].selection === "" && (
              <Link
                href={{
                  pathname: "/result",
                  query: { finish: true, name: router.query.name }
                }}
                as="/result"
              >
                <button>{t("just-finish")}</button>
              </Link>
            )}
            <style jsx>
              {`
                margin-top: auto;
                text-align: center;
              `}
            </style>
          </p>
        </>
      );
    }
  }
}

export default withTranslation("exam")(withRouter(Exam));
