import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import * as db from "../../Database";
import { setQuizQuestions } from "./reducer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function QuizDetails() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const { cid, id } = useParams();
  // TODO: NOT going to use the quiz id right now (which is "id") since the current params of the link
  // aren't associated with an existing quiz... so we are going to use the database id below... temporarily
  const qid = "9876";

  const { quiz_questions } = useSelector((state: any) => state.quizReducer);

  const fetchQuizQuestions = () => {
    // Add database fetch
    // Local fetch
    dispatch(
      setQuizQuestions(
        db.quizQuestionsSample.filter((quiz) => quiz.quiz_id === qid)
      )
    );
  };

  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quiz_questions[0]);
  const [selectedAnswers, setSelectedAnswers] = useState<number[][]>(
    Array(quiz_questions.length).fill([-1])
  );
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeStarted, setTimeStarted] = useState<string>("");

  useEffect(() => {
    // Set the start time once when the component mounts
    const startTime = new Date().toLocaleString();
    fetchQuizQuestions();
    setTimeStarted(startTime);
    console.log("current user: ", currentUser);
  }, []);

  useEffect(() => {
    setCurrentQuestion(quiz_questions[currentQuestionNumber]);
  }, [currentQuestionNumber, quiz_questions]);

  return <h1>Quiz Details Screen Goes Here</h1>;
}
