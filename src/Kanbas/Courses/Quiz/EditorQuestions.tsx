import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuizQuestions } from "./reducer";
import { useParams } from "react-router";
import { FaPencilAlt } from "react-icons/fa";


import * as db from "../../Database";

export default function EditorQuestions() {
  const dispatch = useDispatch();
  const { cid, qid } = useParams();

  const { quiz_questions, quizzes } = useSelector(
    (state: any) => state.quizReducer
  );

  const fetchQuizQuestions = () => {
    // Add database fetch
    // Local fetch
    console.log(qid);
    dispatch(
      setQuizQuestions(
        db.quizQuestionsSample.filter((quiz) => quiz.quiz_id === qid)
      )
    );
  };

  const fetchQuizzes = () => {
    // Add database fetch
    // dispatch(setQuizzes(quizQuestions));
    // Local fetch
  };

  useEffect(() => {
    fetchQuizQuestions();
    fetchQuizzes();
  }, []);

  return (
    <div>
      <ul className="list-group mt-3">
        {quiz_questions &&
          quiz_questions.map((q: any, i: any) => (
            <li className="list-group-item">
              <div className="d-flex flex-row">
                <div className = "flex-grow-1">
                  <h6>Question {i + 1}:</h6>
                  <h3>{q.title}</h3>
                </div>
                <div className="align-self-center">
                  <FaPencilAlt />
                </div>
              </div>
            </li>
          ))}
      </ul>

      <div className="text-center">
        <button
          id="new_quiz_question"
          className="btn btn-lg btn m-1 btn-secondary"
        >
          + Question
        </button>
      </div>
    </div>
  );
}
