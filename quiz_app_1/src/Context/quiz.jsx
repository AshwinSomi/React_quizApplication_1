import { createContext } from "react";
import { useReducer } from "react";
//import questions from "../data";
import shuffuledAns from "../Component/helper";
import normalizedQues from "../Component/helper2";

const initialState = {
  questionIndex: 0,
  questions: [],
  showResults: false,
  //answers: shuffuledAns(questions[0]),
  answers: [],
  currentAnswer: "",
};

const reducer = (state, action) => {
  //console.log("reducer", state, action);
  switch (action.type) {
    case "NEXT_QUES": {
      const showResults = state.questionIndex === state.questions.length - 1;
      const questionIndex = showResults
        ? state.questionIndex
        : state.questionIndex + 1;
      const answers = showResults
        ? []
        : shuffuledAns(state.questions[state.questionIndex + 1]);
      return {
        ...state,
        questionIndex: questionIndex,
        showResults,
        answers,
        currentAnswer: "",
      };
    }
    case "RESTART": {
      return initialState;
    }
    case "SELECT_ANS": {
      //const showAns = state.questions[state.questionIndex].correctAnswer;
      return { ...state, currentAnswer: action.payload };
    }
    case "LOADED_QUES": {
      const normalized_Ques = normalizedQues(action.payload);
      //console.log(action.payload);
      return {
        ...state,
        questions: normalized_Ques,
        answers: shuffuledAns(normalized_Ques[0]),
      };
    }
    default: {
      return state;
    }
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
