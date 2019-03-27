import React from "react";
import { Head, Timer } from "../components";
import Link from "next/link";
import { withRouter } from "next/router";
import { withNamespaces } from "../i18n";

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
        title: "GOHORSEは最高ですか。",
        items: ["SI 🐴", "لا", "может быть"],
        answer: 0,
        selection: ""
      },
      {
        title: "Refactoring?",
        items: ["YES", "yes", "No", "Y", "only on mondays"],
        answer: 2,
        selection: ""
      }
    ],
    questionIndex: 0
  };
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
  handleTimeOver = () => {
    alert("TIME IS OVER");
    const { router } = this.props;
    const result = this.result();
    router.push({
      pathname: "/result",
      query: { result, name: router.query.name }
    });
  };
  render() {
    const { router, t } = this.props;
    const { questions, questionIndex } = this.state;

    if (!router.query.name) {
      router.push("/");
      return <div />;
    } else {
      return (
        <section>
          <Head title="XGH Certification" />
          <h2>Time Left</h2>
          <Timer onTimeOver={this.handleTimeOver} />
          <h2>Question #{questionIndex}</h2>
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
              <button onClick={this.handleClickQuestion(QUESTION_ACTION.BACK)}>
                Back
              </button>
            )}
            {questionIndex === questions.length - 1
              ? questions[questionIndex].selection !== "" && (
                  <button onClick={this.handleClickFinish}>Finish</button>
                )
              : questions[questionIndex].selection !== "" && (
                  <button
                    onClick={this.handleClickQuestion(QUESTION_ACTION.NEXT)}
                  >
                    Next
                  </button>
                )}
          </div>

          <p className="just-finish">
            {questionIndex === 0 && questions[questionIndex].selection === "" && (
              <Link
                href={{
                  pathname: "/result",
                  query: { finish: true, name: router.query.name }
                }}
                as="/result"
              >
                <button>Just Finish It</button>
              </Link>
            )}
          </p>

          <style jsx>
            {`
              section {
                display: flex;
                height: 100vh;
                margin: 20px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              .just-finish {
                margin-top: auto;
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
      );
    }
  }
}

export default withNamespaces("exam")(withRouter(Exam));
