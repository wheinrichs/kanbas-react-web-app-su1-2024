import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as client from "./client";
import {
  addNewQuestion,
  cancelEditQuizQuestion,
  deleteQuizQuestion,
  editQuizQuestion,
  setQuizQuestions,
  updateQuizQuestion,
} from "../../reducer";
import { useParams } from "react-router";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

import EditorSingleQuestion from "./EditorSingleQuestion";

export default function EditorQuestions({newQuestionIDs, setNewQuestionIDs} : {newQuestionIDs: any, setNewQuestionIDs: (q: any) => void}) {
  const dispatch = useDispatch();
  const { cid, qid } = useParams();
  const [points, updatePoints] = useState(0);

  const [question, setQuestion] = useState({
    _id: new Date().getTime(),
    quizID: qid,
    type: "multiple",
    title: "",
    points: "",
    question: "",
    editing: "true",
  });

  const resetQuestion = () => {
    setQuestion({
      _id: new Date().getTime(),
      quizID: qid,
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

  const fetchQuizQuestions = async () => {
    // Add database fetch
    const quizQuestionsNew = await client.fetchQuizQuestions(qid);
    // Local set
    dispatch(setQuizQuestions(quizQuestionsNew));
  };

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  const addNewQuestionLocalServer = async () => {
    // DB add
    const newQuestion = await client.addNeWQuizQuestion(cid, question)

    // Local add
    dispatch(addNewQuestion(newQuestion));
    setNewQuestionIDs([...newQuestionIDs, newQuestion._id])
    resetQuestion();
  };

  const editExistingQuestion = (questionToEdit: any) => {
    setQuestion({ ...questionToEdit });
    dispatch(editQuizQuestion(questionToEdit._id));
  };

  const deleteExistingQuestion = async (questionToDelete: any) => {
    const response = await client.deleteQuizQuestionsByQuestionID(questionToDelete._id);
    setNewQuestionIDs(newQuestionIDs.filter((q: any) => q !== questionToDelete._id))
    dispatch(deleteQuizQuestion(questionToDelete._id));
  }

  return (
    <div>
      <h4 className="mt-3" >{`Total Quiz Points: ${points}`}</h4>

      <ul className="list-group mt-3">
        {quiz_questions &&
          quiz_questions.map((q: any, i: any) => 
            q.editing ? <EditorSingleQuestion questionParam={{...q}} resetQuestion={resetQuestion} points={points} setPoints={updatePoints} />
          :  (
            <li className="list-group-item">
              <div className="d-flex flex-row">
                <div className="flex-grow-1">
                  <h6>Question {i + 1}:</h6>
                  <h3>{q.title}</h3>
                </div>
                <div className="align-self-center">
                  <FaPencilAlt onClick={() => editExistingQuestion(q)} />
                    <FaTrash className="ms-3" onClick={() => deleteExistingQuestion(q)} />
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
