const normalizedQues = (backendQues) => {
  return backendQues.map((backendQuestion) => {
    const incorrectAnswers = backendQuestion.incorrect_answers.map(
      (incorrectAnswers) => decodeURIComponent(incorrectAnswers)
    );
    return {
      correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
      question: decodeURIComponent(backendQuestion.question),
      incorrectAnswers,
    };
  });
};
export default normalizedQues;
