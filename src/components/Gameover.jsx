import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import end from "../imgs/end.svg";

import "./Gameover.css";

const Gameover = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score}/{quizState.questions.length} perguntas.
      </p>
      <img src={end} alt="endquiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default Gameover;
