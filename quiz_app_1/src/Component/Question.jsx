import { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../Context/quiz";

const Question = () => {
  const [quesState, dispatch] = useContext(QuizContext);
  const curQuestion = quesState.questions[quesState.questionIndex];

  return (
    <div>
      <div className="question">{curQuestion.question}</div>
      <div className="answers">
        {quesState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            key={index}
            index={index}
            currentAns={quesState.currentAnswer}
            correctAns={curQuestion.correctAnswer}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANS", payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
