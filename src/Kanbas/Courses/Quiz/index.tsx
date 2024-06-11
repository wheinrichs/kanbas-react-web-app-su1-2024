import Editor from "./Editor/Editor";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Quizzes() {
  const { cid } = useParams();
  let new_quiz_id;
  const create_new_id = () => {
    new_quiz_id = new Date().getTime().toString();
    return null;
  };
  return (
    <div>
      <h1>Quiz Section</h1>
      <h2>Create the list of quizzes here</h2>
      
      {/* I'm just creating a button here to nav to the editor screen, feel free to move around */}
      <div>
        <div>{create_new_id()}</div>
        <Link
          className="btn btn-danger"
          to={`/Kanbas/Courses/${cid}/Quizzes/Editor/${new_quiz_id}`}
          key={`/Kanbas/Courses/${cid}/Quizzes/Editor/${new_quiz_id}`}
        >
          + Quiz
        </Link>
      </div>
    </div>
  );
}
