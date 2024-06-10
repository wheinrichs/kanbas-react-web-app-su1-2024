import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewQuestion, cancelEditQuizQuestion, editQuizQuestion, setQuizQuestions, updateQuizQuestion } from "./reducer";
import { useParams } from "react-router";
import { FaPencilAlt } from "react-icons/fa";

import * as db from "../../Database";
import { editModule } from "../Modules/reducer";
import MultipleChoiceEditor from "./MultipleChoiceEditor";

export default function EditorQuestions() {
  const dispatch = useDispatch();
  const { cid, qid } = useParams();

  const [question, setQuestion] = useState({
    quiz_id: qid,
    question_id: new Date().getTime().toString(),
    type: "multiple",
    title: "New Question",
    points: "0",
    question: "New Question",
    choices: [],
    editing: "true",
  });

  const resetQuestion = () => {
    setQuestion({
      ...question,
      quiz_id: qid,
      question_id: new Date().getTime().toString(),
      type: "multiple",
      title: "New Question",
      points: "0",
      question: "New Question",
      choices: [],
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

  const addNewQuestionLocalServer = () => {
    // Create a new ID for the question
    // Add database add new question
    // Local add
    dispatch(addNewQuestion({ ...question }));
    resetQuestion();
  };

  const editExistingQuestion = (questionToEdit: any) =>{
    setQuestion({...questionToEdit}); 
    dispatch(editQuizQuestion(questionToEdit.question_id))
  }

  const conditionalQuestionRendering = (questionToRender: any) => {
    if (questionToRender.type === "multiple") {
      console.log(questionToRender);
      return <MultipleChoiceEditor questionMethod={questionToRender} />;
    }
  };

  return (
    <div>
      <ul className="list-group mt-3">
        {quiz_questions &&
          quiz_questions.map((q: any, i: any) =>
            q.editing ? (
              <li className="list-group-item">
                <div>
                  <h2>Editing Question</h2>
                  <div className="d-flex flex-row">
                    <input className="form-control me-2"></input>
                    <div className="dropdown me-3">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                      >
                        Question Type
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button className="dropdown-item">
                            Multiple Choice
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item">True False</button>
                        </li>
                        <li>
                          <button className="dropdown-item">
                            Fill in the blank
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="align-self-center me-2 ms-5">
                      <label htmlFor={`points${q.question_id}`}>Points:</label>
                    </div>
                    <div>
                      <input
                        id={`points${q.question_id}`}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <hr />
                  Enter your question and answers, and then select the right
                  answer.
                  <h4>Question</h4>
                  <textarea className="form-control" rows={7}></textarea>
                </div>
                {conditionalQuestionRendering(q)}
                <div className="mt-3">
                  <button
                    id="cancel_edit_quiz"
                    className="btn btn-lg btn- me-1 btn-secondary"
                    onClick={() => dispatch(cancelEditQuizQuestion(q.question_id))}
                  >
                    Cancel
                  </button>

                  <button
                    id="save_edit_quiz"
                    className="btn btn-lg btn-danger me-1"
                    onClick={() => dispatch(updateQuizQuestion(question))}

                  >
                    Update
                  </button>
                </div>
              </li>
            ) : (
              <li className="list-group-item">
                <div className="d-flex flex-row">
                  <div className="flex-grow-1">
                    <h6>Question {i + 1}:</h6>
                    <h3>{q.title}</h3>
                  </div>
                  <div className="align-self-center">
                    <FaPencilAlt
                      onClick={() => editExistingQuestion}
                    />
                  </div>
                </div>
              </li>
            )
          )}
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
