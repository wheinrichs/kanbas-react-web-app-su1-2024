import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import EditorQuizDetails from "./EditorQuizDetails";
import EditorQuestions from "./EditorQuestions";

export default function Editor() {
  const { cid, id } = useParams();
  const { pathname } = useLocation();

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
      </div>
    </div>
  );
}
