import React from "react";
import { Head } from "../components";
import Link from "next/link";

const QUESTION_ACTION = {
  BACK: -1,
  NEXT: 1
};

class Questions extends React.PureComponent {
  state = {
    questions: [
      {
        title: "Teste",
        items: ["yes", "no", "maybe"],
        answer: ""
      },
      {
        title: "Teste",
        items: ["yes", "no", "maybe"],
        answer: ""
      },
      {
        title: "Teste",
        items: ["yes", "no", "maybe"],
        answer: ""
      }
    ],
    questionIndex: 0
  };

  handleClickQuestion = action => evt => {
    evt.preventDefault();
    const currentIndex = this.state.questionIndex;
    this.setState({ questionIndex: currentIndex + action });
  };
  handleRadio = evt => {
    const questions = [...this.state.questions];
    questions[this.state.questionIndex].answer = evt.currentTarget.value;

    this.setState({
      questions
    });
  };
  render() {
    const { questions, questionIndex } = this.state;

    return (
      <div>
        <Head title="XGH Certification" />
        <h2>Question #{questionIndex}</h2>
        <h3>{questions[questionIndex].title}</h3>
        {questions[questionIndex].items.map((item, index) => (
          <React.Fragment key={`${index}`}>
            <input
              type="radio"
              checked={questions[questionIndex].answer === item}
              value={`${item}`}
              onChange={this.handleRadio}
            />
            {item}
            <br />
          </React.Fragment>
        ))}
        {questionIndex > 0 && (
          <button onClick={this.handleClickQuestion(QUESTION_ACTION.BACK)}>
            Back
          </button>
        )}
        {questionIndex === questions.length - 1 ? (
          <Link href="/result">
            <button>FINISH</button>
          </Link>
        ) : (
          questions[questionIndex].answer !== "" && (
            <button onClick={this.handleClickQuestion(QUESTION_ACTION.NEXT)}>
              Next
            </button>
          )
        )}
      </div>
    );
  }
}

export default Questions;
