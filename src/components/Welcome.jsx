import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import welcome from "../imgs/welcome.svg";
import "./Welcome.css";

const Welcome = () => {
  const [quizSate, dispatch] = useContext(QuizContext);

  console.log(quizSate);
  return (
    <div className="welcome">
      <h1>Seja Bem Vindo</h1>
      <p>Clique no botão abaixo para começar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={welcome} alt="Quiz" />
    </div>
  );
};

export default Welcome;
