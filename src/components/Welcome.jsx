import React from "react";

import logo from "../assets/image/logo.png";
import { questionsDeck } from "../assets/data/questionsDeck.js";

export default function Welcome(props) {
  const [warn, setWarn] = React.useState(false);

  function verifyGoal() {
    if (props.goal > 0 && props.goal <= props.deck.length) {
      setWarn(false);
      props.toPage();
    } else {
      setWarn(true);
    }
  }

  function changeDeck(option) {
    const shuffledQuestions = shuffleQuestions(
      questionsDeck[Number(option)].questions
    );
    props.setDeck(shuffledQuestions);
  }

  return (
    <section className="welcome">
      <img src={logo} alt="Zap Recall" />
      <h1>Zap Recall</h1>
      <div className="zap-goal">
        <p>
          Defina a sua <br />
          meta de Zaps:
        </p>
        <input
          type="number"
          placeholder={`1 a ${props.deck.length}`}
          onChange={(e) => {
            props.setGoal(Number(e.target.value));
          }}
          className={warn ? "warn" : ""}
        />
      </div>
      <p className={`warn ${warn ? "visible" : ""}`}>
        Insira um número válido especificado
      </p>
      <div className="deck-selection">
        <p>Selecione o deque de questões:</p>
        <select onChange={(e) => changeDeck(e.target.value)}>
          {questionsDeck.map((deck, index) => (
            <option value={index} key={index}>
              {" "}
              {deck.title}{" "}
            </option>
          ))}
        </select>
      </div>
      <button onClick={verifyGoal}>Iniciar Recall!</button>
    </section>
  );
}

function shuffleQuestions(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const aux = questions[i];
    questions[i] = questions[j];
    questions[j] = aux;
  }

  return questions;
}
