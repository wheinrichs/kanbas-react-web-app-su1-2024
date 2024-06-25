import { useDispatch, useSelector } from "react-redux";
import Editor from "./Editor/Editor";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { addQuiz, setQuizzes } from "./reducer";
import * as client from "./client";
import { useEffect, useState } from "react";
import SampleInteractQuizGrade from "./SampleInteractQuizGrade";
import { FaRocket } from "react-icons/fa6";

export default function Quizzes() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { currentCourses } = useSelector((state: any) => state.currentCoursesReducer);
  let currentDate = new Date();
  const { cid } = useParams();
  const navigate = useNavigate();
  const { quizzes } = useSelector((state: any) => state.quizReducer);
  const [quiz, setQuiz] = useState({
    title: "New Quiz",
    points: "",
    courseID: cid,
  });
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
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Quiz Section</h1>
      <hr></hr>

      <div
        style={{
          marginTop: "12px",
          backgroundColor: "rgb(245, 245, 245)",
          border: "1px solid rgb(199, 205, 209)",
          padding: "12px 6px 12px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Assignment Quizzes
      </div>
      {quizzes.map((quiz: any) => (
        <div
          key={quiz._id}
          style={{
            padding: "12px 6px 12px 10px",
            borderWidth: "0px 1px 1px",
            borderStyle: "none solid solid",
            borderColor: "currentcolor rgb(199, 205, 209) rgb(199, 205, 209)",
            borderImage: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <FaRocket></FaRocket>
            </div>
            <div style={{ marginRight: "24px", marginLeft: "12px" }}>
              <h4 style={{ fontSize: "16px", margin: "0px" }}>
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/details`}>
                  {quiz.title}
                </Link>
              </h4>

              <div
                style={{ fontSize: "12px", display: "flex", columnGap: "12px" }}
              >
                <span>
                  {new Date(quiz.available_date) > currentDate
                    ? "Available"
                    : "Closed"}
                </span>
                <span>
                  {" "}
                  <b>Due</b> {quiz.due_date ? quiz.due_date.toString() : "?"}
                </span>
                <span>{quiz.points ? quiz.points : "?"} Points</span>
                <span>? Questions</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      {(currentUser.role === "ADMIN" || currentUser._id === currentCourses.find((c: any) => c._id === cid).author) && (
        <div>
          <button
            className="btn btn-danger"
            onClick={() => createNewQuizLocalAndServer()}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            + Quiz
          </button>
          <SampleInteractQuizGrade />
        </div>
      )}
    </div>
  );
}
