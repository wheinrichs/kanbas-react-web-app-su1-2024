import { useDispatch, useSelector } from "react-redux";
import Editor from "./Editor/Editor";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { addQuiz, setQuizzes } from "./reducer";
import * as client from "./client";
import { useEffect, useState } from "react";
import SampleInteractQuizGrade from "./SampleInteractQuizGrade";


export default function Quizzes() {
  const { cid } = useParams();
  const navigate = useNavigate()
  const { quizzes } = useSelector((state: any) => state.quizReducer);
  const [quiz, setQuiz] = useState({
    title: "New Quiz",
    points: "",
    courseID: cid,
  })
  const dispatch = useDispatch();
  const createNewQuizLocalAndServer = async () => {
    const newQuiz = await client.createQuiz(quiz);
    setQuiz(newQuiz);
    dispatch(addQuiz(newQuiz));
    navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor/${newQuiz._id}`);
  };

  const fetchQuizzes = async () => {
    const newQuizzes = await client.fetchQuizzesByCourse(cid);
    dispatch(setQuizzes(newQuizzes));
  }

  useEffect(() => {
    fetchQuizzes();
  }, []);
  
  console.log(quizzes);

  return (
    <div>
      <h1>Quiz Section</h1>
      <h2>Create the list of quizzes here</h2>
      
      {/* I'm just creating a button here to nav to the editor screen, feel free to move around */}
      <div>
        <button
          className="btn btn-danger"
          onClick={() => createNewQuizLocalAndServer()}
        >
          + Quiz
        </button>
        <SampleInteractQuizGrade />
      </div>
    </div>
  );
}
