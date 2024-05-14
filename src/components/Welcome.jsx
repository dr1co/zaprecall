import logo from "../assets/image/logo.png";

export default function Welcome(props) {
  return (
    <section className="welcome">
      <img src={logo} alt="Zap Recall" />
      <h1>Zap Recall</h1>
      <button onClick={props.toPage}>Iniciar Recall!</button>
    </section>
  );
}
