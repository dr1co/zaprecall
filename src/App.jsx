import React from "react";
import Welcome from "./components/Welcome.jsx";
import Recall from "./components/Recall.jsx";

import "./assets/css/reset.css";
import "./assets/css/style.css";

function App() {
  const [page, setPage] = React.useState("Welcome");

  function toPage(p) {
    setPage(p);
  }

  switch (page) {
    case "Recall":
      return (
        <>
          <Recall toPage={() => toPage("Welcome")} />
        </>
      );
    default:
      return (
        <>
          <Welcome toPage={() => toPage("Recall")} />
        </>
      );
  }
}

export default App;
