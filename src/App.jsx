import React from "react";

import Welcome from "./components/Welcome.jsx";
import Recall from "./components/Recall.jsx";
import { questionsDeck } from "./assets/data/questionsDeck.js";

import "./assets/css/reset.css";
import "./assets/css/style.css";

function App() {
  const [page, setPage] = React.useState("Welcome");
  const [goal, setGoal] = React.useState(0);
  const [deck, setDeck] = React.useState(questionsDeck[0].questions);

  function toPage(p) {
    setPage(p);
  }

  switch (page) {
    case "Recall":
      return (
        <>
          <Recall
            toPage={() => toPage("Welcome")}
            goal={goal}
            questionsDeck={deck}
          />
        </>
      );
    default:
      return (
        <>
          <Welcome
            toPage={() => toPage("Recall")}
            goal={goal}
            setGoal={setGoal}
            deck={deck}
            setDeck={setDeck}
          />
        </>
      );
  }
}

export default App;
