import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import { setQuizzes } from "./reducer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as client from "./client";
import { FaPencil } from "react-icons/fa6";
import * as clientEditor from "./Editor/client"

export default function QuizDetails(course: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentCourses } = useSelector(
    (state: any) => state.currentCoursesReducer
  );
  const { cid, qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [userGrades, setUserGrades] = useState([]);
  const [canTake, setCanTake] = useState(true);

  const [publish, setPublish] = useState(true)

  const fetchUserGrades = async () => {
    const userGradesResponse = await client.getQuizGradeByUserID(
      currentUser._id
    );

    if (currentQuiz.attempts) {
      const attempts = userGradesResponse.filter(
        (g: any) => g.quizID === qid
      ).length;
      setCanTake(attempts < currentQuiz.numberOfAttempts);
    }
    else {
      const attempts = userGradesResponse.filter(
        (g: any) => g.quizID === qid
      ).length;
      setCanTake(attempts < 1);
    }
    setUserGrades(userGradesResponse);
  };

  const [currentQuiz, setCurrentQuiz] = useState<any>({
    title: "",
    points: "",
    courseID: cid,
  });

  const fetchCurrentQuiz = async () => {
    const newFetchedQuiz = await client.fetchQuiz(qid);
    setCurrentQuiz(newFetchedQuiz);
    setPublish(newFetchedQuiz.published);
  };

  useEffect(() => {
    fetchCurrentQuiz();
    fetchUserGrades();
  }, [publish, currentQuiz]);

  const publishQuiz = async () => {
    const newQuiz = await clientEditor.updateQuiz(qid, {...currentQuiz, published: true});
    setCurrentQuiz(newQuiz);
    setPublish(true);
  }

  const unpublishQuiz = async () => {
    const newQuiz = await clientEditor.updateQuiz(qid, {...currentQuiz, published: false});
    setCurrentQuiz(newQuiz);
    setPublish(false);
  }

  console.log(currentQuiz.published);

  return (
    <div>
      {(currentUser.role === "ADMIN" ||
        currentUser._id ===
          course.author) && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            columnGap: "10px",
          }}
        >
          {publish ? (
            <button
            style={{
              backgroundColor: "green",
              border: "1px solid rgb(204, 204, 204)",
              borderRadius: "5px",
              padding: "5px 15px",
              color: "white",
            }}
            onClick={() => unpublishQuiz()}

          >
            Published
          </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => publishQuiz()}
            >
              Unpublished
            </button>
          )}

          <button
            style={{
              border: "1px solid rgb(204, 204, 204)",
              borderRadius: "5px",
              padding: "5px 15px",
            }}
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`)}
          >
            Preview
          </button>

          <button
            style={{
              border: "1px solid rgb(204, 204, 204)",
              borderRadius: "5px",
              padding: "5px 15px",
            }}
            onClick={() =>
              navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}`)
            }
          >
            {" "}
            <FaPencil /> Edit
          </button>
          <hr></hr>
        </div>
      )}

      {currentUser.role !== "ADMIN" &&
        currentUser.role !== "FACULTY" &&
        canTake && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              columnGap: "10px",
            }}
          >
            <button
              style={{
                border: "1px solid rgb(204, 204, 204)",
                borderRadius: "5px",
                padding: "5px 15px",
              }}
              onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`)}
            >
              Take Quiz
            </button>
          </div>
        )}

      {currentUser.role !== "ADMIN" &&
        currentUser.role !== "FACULTY" &&
        !canTake && (
          <div
            style={{
              backgroundColor: "rgb(248, 233, 229)",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            You can not take this quiz again
          </div>
        )}

      <h1>{currentQuiz.title}</h1>
      <div style={{ display: "flex", columnGap: "10px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            rowGap: "10px",
          }}
        >
          <span>Quiz Type</span>
          <span>Points</span>
          <span>Assignment Group </span>
          <span>Shuffle Answers </span>
          <span>Time Limit</span>
          <span>Multiple Attempts</span>
          <span>Show Correct Answers</span>
          <span>One Question at a Time</span>
          <span>Webcam Required </span>
          <span>Lock Questions After Answering</span>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <span>{!currentQuiz.type ? "N/A" : currentQuiz.type}</span>
          <span>{!currentQuiz.points ? "N/A" : currentQuiz.points}</span>
          <span>
            {!currentQuiz.assignment_group
              ? "N/A"
              : currentQuiz.assignment_group}
          </span>
          <span>
            {!currentQuiz.shuffle ? "N/A" : currentQuiz.shuffle ? "Yes" : "No"}
          </span>
          <span>
            {!currentQuiz.time_limit
              ? "N/A"
              : currentQuiz.shuffle
              ? "Yes"
              : "No"}
          </span>
          <span>
            {!currentQuiz.attempts ? "N/A" : currentQuiz.shuffle ? "Yes" : "No"}
          </span>
          <span>
            {!currentQuiz.show_correct_answers
              ? "N/A"
              : currentQuiz.shuffle
              ? "Yes"
              : "No"}
          </span>
          <span>
            {!currentQuiz.one_at_a_time
              ? "N/A"
              : currentQuiz.shuffle
              ? "Yes"
              : "No"}
          </span>
          <span>
            {!currentQuiz.webcam ? "N/A" : currentQuiz.shuffle ? "Yes" : "No"}
          </span>
          <span>
            {!currentQuiz.lock_after
              ? "N/A"
              : currentQuiz.shuffle
              ? "Yes"
              : "No"}
          </span>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <span
          style={{
            width: "25%",
            borderBottom: "1px solid rgb(136, 136, 136)",
            padding: "16px 0px",
            fontWeight: 700,
          }}
        >
          Due
        </span>
        <span
          style={{
            width: "25%",
            borderBottom: "1px solid rgb(136, 136, 136)",
            padding: "16px 0px",
            fontWeight: 700,
          }}
        >
          For
        </span>
        <span
          style={{
            width: "25%",
            borderBottom: "1px solid rgb(136, 136, 136)",
            padding: "16px 0px",
            fontWeight: 700,
          }}
        >
          Available From
        </span>
        <span
          style={{
            width: "25%",
            borderBottom: "1px solid rgb(136, 136, 136)",
            padding: "16px 0px",
            fontWeight: 700,
          }}
        >
          Until
        </span>
        <span
          style={{
            width: "25%",
            borderBottom: "1px solid rgb(136, 136, 136)",
            padding: "16px 0px",
          }}
        >
          {!currentQuiz.due_date
            ? "N/A"
            : new Date(currentQuiz.due_date).toLocaleDateString("en-US")}
        </span>
        <span
          style={{
            width: "25%",
            borderBottom: "1px solid rgb(136, 136, 136)",
            padding: "16px 0px",
          }}
        >
          {!currentQuiz.instructions ? "N/A" : currentQuiz.instructions}
        </span>
        <span
          style={{
            width: "25%",
            borderBottom: "1px solid rgb(136, 136, 136)",
            padding: "16px 0px",
          }}
        >
          {!currentQuiz.available_date
            ? "N/A"
            : new Date(currentQuiz.available_date).toLocaleDateString("en-US")}
        </span>
        <span
          style={{
            width: "25%",
            borderBottom: "1px solid rgb(136, 136, 136)",
            padding: "16px 0px",
          }}
        >
          {!currentQuiz.until_date
            ? "N/A"
            : new Date(currentQuiz.until_date).toLocaleDateString("en-US")}
        </span>
      </div>
    </div>
  );
}
