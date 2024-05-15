import React from "react";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";
import logo from "../assets/image/logo.png";

export default function Recall(props) {
  const [counter, setCounter] = React.useState(0);
  const [questionsAnswered, setQuestionsAnswered] = React.useState([]);

  function addAnswer(answer) {
    const answers = questionsAnswered;
    answers.push(answer);
    setQuestionsAnswered(answers);
  }

  function addOne() {
    setCounter(counter + 1);
  }
  return (
    <section className="recall">
      <Header />
      <Content
        questionsDeck={props.questionsDeck}
        addOne={addOne}
        addAnswer={addAnswer}
        questionsAnswered={questionsAnswered}
      />
      <Footer
        counter={counter}
        questionsNumber={props.questionsDeck.length}
        questionsAnswered={questionsAnswered}
        setQuestionsAnswered={setQuestionsAnswered}
        toHomePage={props.toPage}
        goal={props.goal}
      />
    </section>
  );
}

function Header() {
  return (
    <header>
      <img src={logo} alt="Zap Recall" />
      <h1>ZapRecall</h1>
    </header>
  );
}
