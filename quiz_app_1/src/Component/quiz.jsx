import { useContext, useEffect } from "react";
import Question from "./Question";
import { QuizContext } from "../Context/quiz";

const quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  //console.log(quizState);
  const apiUrl =
    "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";

  useEffect(() => {
    if (quizState.questions.length > 0) {
      return;
    }
    console.log("on initialize");
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        dispatch({ type: "LOADED_QUES", payload: data.results });
      });
  });

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">congrats</div>
          <div className="results-info">
            <div>quiz has completed</div>
          </div>
          <div
            className="next-button"
            onClick={() => dispatch({ type: "RESTART" })}
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && quizState.questions.length > 0 && (
        <div>
          <div className="source">
            Question {quizState.questionIndex + 1}/{quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUES" })}
          >
            Next question
          </div>
        </div>
      )}
    </div>
  );
};
export default quiz;
