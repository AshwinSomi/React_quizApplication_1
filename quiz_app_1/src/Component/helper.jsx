const shuffleAns = (question) => {
  const unshuffledAns = [question.correctAnswer, ...question.incorrectAnswers];

  return unshuffledAns
    .map((unshuffledAns) => ({
      sort: Math.random(),
      value: unshuffledAns,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};
export default shuffleAns;
