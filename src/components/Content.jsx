import React from "react";
import turnImg from "../assets/image/setinha.png";
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoHelpCircle,
  IoPlayOutline,
} from "react-icons/io5";

export default function Content(props) {
  shuffleQuestions(props.questionsDeck);

  return (
    <div className="content">
      <Questions>
        {props.questionsDeck.map((comp, index) => (
          <Question
            key={index}
            number={index + 1}
            question={comp.question}
            answer={comp.answer}
            counter={props.counter}
            addOne={props.addOne}
            addAnswer={props.addAnswer}
          />
        ))}
      </Questions>
    </div>
  );
}

function Question(props) {
  const [view, setView] = React.useState(false);

  function toggleView() {
    setView(!view);
  }

  const [response, setResponse] = React.useState("unanswered");

  function toggleResponse(a) {
    toggleView();
    setResponse(a);
    props.addAnswer(a);
    props.addOne();
  }

  switch (view) {
    case true:
      return (
        <div className="card">
          <div className="card-inner">
            <CardContent
              status={view}
              question={props.question}
              answer={props.answer}
              toggleResponse={toggleResponse}
            />
          </div>
        </div>
      );
    default:
      return (
        <div className="card">
          <div className="card-inner">
            <CardFace
              number={props.number}
              toggleView={toggleView}
              response={response}
            />
          </div>
        </div>
      );
  }
}

function CardFace(props) {
  switch (props.response) {
    case "red":
      return (
        <div className="front red-text">
          <h2 className="line-through">Pergunta {props.number}</h2>
          {/*<ion-icon name="close-circle"></ion-icon>*/}
          <IoCloseCircle />
        </div>
      );
    case "yellow":
      return (
        <div className="front yellow-text">
          <h2 className="line-through">Pergunta {props.number}</h2>
          {/*<ion-icon name="help-circle"></ion-icon>*/}
          <IoHelpCircle />
        </div>
      );
    case "green":
      return (
        <div className="front green-text">
          <h2 className="line-through">Pergunta {props.number}</h2>
          {/*<ion-icon name="checkmark-circle"></ion-icon>*/}
          <IoCheckmarkCircle />
        </div>
      );
    default:
      return (
        <div className="front">
          <h2>Pergunta {props.number}</h2>
          {/*<ion-icon name="play-outline" onClick={props.toggleView}></ion-icon>*/}
          <IoPlayOutline className="play-icon" onClick={props.toggleView} />
        </div>
      );
  }
}

function CardContent(props) {
  const [flip, setFlip] = React.useState(false);

  function flipCard() {
    setFlip(!flip);
  }

  return (
    <div className={`back ${flip ? "flipped" : ""}`}>
      <div className={`back-inner`}>
        <div className="question">
          <p>{props.question}</p>
          <img src={turnImg} onClick={flipCard} alt="setinha" />
        </div>
        <div className="answer">
          <p>{props.answer}</p>
          <div className="answer-buttons">
            <button className="red" onClick={() => props.toggleResponse("red")}>
              Não lembrei
            </button>
            <button
              className="yellow"
              onClick={() => props.toggleResponse("yellow")}
            >
              Quase não lembrei
            </button>
            <button
              className="green"
              onClick={() => props.toggleResponse("green")}
            >
              Zap!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Questions(props) {
  return <div className="questions">{props.children}</div>;
}

function shuffleQuestions(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  return questions;
}
