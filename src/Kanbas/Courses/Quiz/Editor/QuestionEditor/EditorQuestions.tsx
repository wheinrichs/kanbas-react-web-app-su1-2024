import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewQuestion,
  cancelEditQuizQuestion,
  editQuizQuestion,
  setQuizQuestions,
  updateQuizQuestion,
} from "../../reducer";
import { useParams } from "react-router";
import { FaPencilAlt } from "react-icons/fa";

import * as db from "../../../../Database";
import EditorSingleQuestion from "./EditorSingleQuestion";

export default function EditorQuestions() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const qid = "9876";
  const [question, setQuestion] = useState({
    quiz_id: qid,
    question_id: new Date().getTime().toString(),
    type: "multiple",
    title: "",
    points: "",
    question: "",
    editing: "true",
  });

  const resetQuestion = () => {
    setQuestion({
      quiz_id: qid,
      question_id: new Date().getTime().toString(),
      type: "multiple",
      title: "",
      points: "",
      question: "",
      editing: "true",
    });
  };

  const { quiz_questions, quizzes } = useSelector(
    (state: any) => state.quizReducer
  );

  const fetchQuizQuestions = () => {
    // Add database fetch
    // Local fetch
    dispatch(
      setQuizQuestions(
        db.quizQuestionsSample.filter((quizq) => quizq.quiz_id === qid)
      )
    );
  };

  const fetchQuizzes = () => {
    // Add database fetch
    // dispatch(setQuizzes(quizQuestions));
    // Local fetch
  };

  useEffect(() => {
    console.log(qid);
    fetchQuizQuestions();
    fetchQuizzes();
  }, []);

  const addNewQuestionLocalServer = () => {
    // Create a new ID for the question
    // Add database add new question
    // Local add
    dispatch(addNewQuestion({ ...question }));
    resetQuestion();
  };

  const editExistingQuestion = (questionToEdit: any) => {
    setQuestion({ ...questionToEdit });
    dispatch(editQuizQuestion(questionToEdit.question_id));
  };

  console.log(quiz_questions);

  return (
    <div>
      <ul className="list-group mt-3">
        {quiz_questions &&
          quiz_questions.map((q: any, i: any) => 
            q.editing ? <EditorSingleQuestion {...q} />
          :  (
            <li className="list-group-item">
              <div className="d-flex flex-row">
                <div className="flex-grow-1">
                  <h6>Question {i + 1}:</h6>
                  <h3>{q.title}</h3>
                </div>
                <div className="align-self-center">
                  <FaPencilAlt onClick={() => editExistingQuestion(q)} />
                </div>
              </div>
            </li>
            ))}
      </ul>

      <div className="text-center">
        <button
          id="new_quiz_question"
          className="btn btn-lg btn m-1 btn-secondary"
          onClick={addNewQuestionLocalServer}
        >
          + Question
        </button>
      </div>
    </div>
  );
}
