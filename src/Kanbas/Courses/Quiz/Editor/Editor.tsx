import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import EditorQuizDetails from "./EditorQuizDetails";
import EditorQuestions from "./QuestionEditor/EditorQuestions";
import { useEffect, useState } from "react";
import * as client from "./client"
import { useDispatch } from "react-redux";

export default function Editor() {
  const { cid, qid } = useParams();
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const [currentQuiz, setCurrentQuiz] = useState({});

  // Need to pass this state variable to keep track of questions you need to remove if the user clicks cancel
  const [questionsToAdd, setQuestionsToAdd] = useState({});

  const saveLocalAndServerQuiz = async () => {
    const newQuiz = client.updateQuiz(qid, currentQuiz);
    setCurrentQuiz(newQuiz);
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  }

  const fetchCurrentQuiz = async () => {
    const newFetchedQuiz = await client.fetchQuiz(qid);
    setCurrentQuiz(newFetchedQuiz);
  }

  useEffect(() => {
    fetchCurrentQuiz();
  }, []);

  console.log(currentQuiz);

  return (
    <div>
      <ul className="nav nav-tabs" id="editor_navigator" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="details_editor_btn"
            data-bs-toggle="tab"
            data-bs-target="#details_editor"
            type="button"
            role="tab"
          >
            Details
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="questions_editor_btn"
            data-bs-toggle="tab"
            data-bs-target="#questions_editor"
            type="button"
            role="tab"
          >
            Questions
          </button>
        </li>
      </ul>

      <div className="tab-content" id="details_editor_content">
        <div
          className="tab-pane fade show active"
          id="details_editor"
          role="tabpanel"
        >
          <EditorQuizDetails />
        </div>
        <div
          className="tab-pane fade"
          id="questions_editor"
          role="tabpanel"
        >
          <EditorQuestions />
        </div>
        <hr />
      <button
        id="cancel_edit_quiz"
        className="btn btn-lg btn- me-1 btn-secondary"
      >
        Cancel
      </button>

      <button
        id="save_edit_quiz"
        className="btn btn-lg btn-danger me-1"
        onClick={saveLocalAndServerQuiz}
      >
        Save
      </button>
      </div>
    </div>
  );
}
