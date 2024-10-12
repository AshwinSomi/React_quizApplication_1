import React from "react";
import ReactDOM from "react-dom/client";
import Quiz from "./Component/quiz.jsx";
import "./index.css";
import { QuizProvider } from "./Context/quiz.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuizProvider>
    <Quiz></Quiz>
  </QuizProvider>
);
