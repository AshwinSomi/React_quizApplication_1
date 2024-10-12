const Answer = ({
  answerText,
  onSelectAnswer,
  index,
  currentAns,
  correctAns,
}) => {
  const letterMap = ["A", "B", "C", "D"];
  const isCorrectAns = currentAns && answerText === correctAns;
  const isWrongAns = currentAns === answerText && currentAns != correctAns;
  const correctAnsClass = isCorrectAns ? "correct-answer" : "";
  const wrongAnsClass = isWrongAns ? "wrong-answer" : "";
  const disabledClass = currentAns ? "disabled-answer" : "";
  return (
    <div
      className={`answer ${correctAnsClass} ${wrongAnsClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer-letter">{letterMap[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
