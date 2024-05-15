import celebrate from "../assets/image/party.png";
import sad from "../assets/image/sad.png";
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoHelpCircle,
} from "react-icons/io5";

export default function Footer(props) {
  let finished = false;

  if (props.counter === props.questionsNumber) {
    finished = true;
  }

  function restartRecall() {
    props.setQuestionsAnswered([]);
    props.toHomePage();
  }

  switch (finished) {
    case true:
      if (verifyRedAnswers(props.questionsAnswered, props.goal)) {
        return (
          <footer>
            <div className="footer-content">
              <div className="message">
                <img src={celebrate} />
                <p>
                  {" "}
                  <strong> Parabéns </strong>
                </p>
              </div>
              <p>
                {" "}
                Você atingiu a sua meta <br />
                de {props.goal} flashcards!
              </p>
              <div className="icons-list">
                {props.questionsAnswered.map((icon, index) => (
                  <Icon key={index} icon={icon} />
                ))}
              </div>
              <p>
                {props.counter}/{props.questionsNumber} CONCLUÍDOS
              </p>
              <button className="home-button" onClick={restartRecall}>
                REINICIAR RECALL
              </button>
            </div>
          </footer>
        );
      } else {
        return (
          <footer>
            <div className="footer-content">
              <div className="message">
                <img src={sad} />
                <p>
                  {" "}
                  <strong> Putz... </strong>
                </p>
              </div>
              <p>
                {" "}
                Ainda faltam alguns... <br /> Mas não desanime!{" "}
              </p>
              <div className="icons-list">
                {props.questionsAnswered.map((icon, index) => (
                  <Icon key={index} icon={icon} />
                ))}
              </div>
              <p>
                {props.counter}/{props.questionsNumber} CONCLUÍDOS
              </p>
              <button className="home-button" onClick={restartRecall}>
                REINICIAR RECALL
              </button>
            </div>
          </footer>
        );
      }
    default:
      return (
        <footer>
          <div className="footer-content">
            <div className="icons-list">
              {props.questionsAnswered.map((icon, index) => (
                <Icon key={index} icon={icon} />
              ))}
            </div>
            <p>
              {props.counter}/{props.questionsNumber} CONCLUÍDOS
            </p>
          </div>
        </footer>
      );
  }
}

function Icon(props) {
  switch (props.icon) {
    case "red":
      return <IoCloseCircle className="md hydrated red-text" />;
    case "yellow":
      return <IoHelpCircle className="md hydrated yellow-text" />;
    case "green":
      return <IoCheckmarkCircle className="md hydrated green-text" />;
    default:
      return;
  }
}

function verifyRedAnswers(arr, goal) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i] !== "red") counter++;
  if (counter >= goal) return true;
  else return false;
}
