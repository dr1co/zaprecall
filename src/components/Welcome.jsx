import React from "react";

import logo from "../assets/image/logo.png";

export default function Welcome(props) {
  const [warn, setWarn] = React.useState(false);

  function verifyGoal() {
    if (props.goal > 0 && props.goal < 9) {
      setWarn(false);
      props.toPage();
    } else {
      setWarn(true);
    }
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
          placeholder="1 a 8"
          onChange={(e) => {
            props.setGoal(Number(e.target.value));
          }}
          className={warn ? "warn" : ""}
        />
      </div>
      <p className={`warn ${warn ? "visible" : ""}`}>
        Insira um número válido especificado
      </p>
      <button onClick={verifyGoal}>Iniciar Recall!</button>
    </section>
  );
}
