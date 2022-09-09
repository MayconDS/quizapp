import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ option, SelectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? "correct" : ""
      }  ${quizState.answerSelected && option !== answer ? "wrong" : ""}
    `}
      onClick={() => SelectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
