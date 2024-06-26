import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import { setQuizzes } from "./reducer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as client from "./client";
import { FaPencil } from "react-icons/fa6";
import * as clientEditor from "./Editor/client";
import * as client5 from "../client";

export default function QuizDetails(course: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [publishedCourses, setPublishedCourses] = useState<any[]>([]);
  const { cid, qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [userGrades, setUserGrades] = useState([]);
  const [canTake, setCanTake] = useState(true);

  const [publish, setPublish] = useState(true);

  const getRecentQuizGrade = () => {
    const recentGrades = userGrades.filter((g: any) => g.quizID === qid);
    if (recentGrades.length === 0) return "Not Taken Yet"; // Handle case with no grades
    const recentGrade = recentGrades[recentGrades.length - 1] as any;
    return recentGrade.grade + "%";
  };

  const fetchUserGrades = async () => {
    const userGradesResponse = await client.getQuizGradeByUserID(
      currentUser._id
    );

    if (currentQuiz.attempts) {
      const attempts = userGradesResponse.filter(
        (g: any) => g.quizID === qid
      ).length;
      setCanTake(attempts < currentQuiz.numberOfAttempts);
    } else {
      const attempts = userGradesResponse.filter(
        (g: any) => g.quizID === qid
      ).length;
      setCanTake(attempts < 1);
    }
    setUserGrades(userGradesResponse);
  };

  const fetchPublishedCourses = async () => {
    const courses = await client5.fetchPublishedCourses();
    setPublishedCourses(courses);
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
    fetchPublishedCourses();
  }, [publish, currentQuiz]);

  const publishQuiz = async () => {
    const newQuiz = await clientEditor.updateQuiz(qid, {
      ...currentQuiz,
      published: true,
    });
    setCurrentQuiz(newQuiz);
    setPublish(true);
  };

  const unpublishQuiz = async () => {
    const newQuiz = await clientEditor.updateQuiz(qid, {
      ...currentQuiz,
      published: false,
    });
    setCurrentQuiz(newQuiz);
    setPublish(false);
  };

  const parseAssignmentGroup = () => {
    if (currentQuiz.assignment_group === "quizzes") {
      return "Quizzes";
    } else if (currentQuiz.assignment_group === "exams") {
      return "Exams";
    } else if (currentQuiz.assignment_group === "assignments") {
      return "Assignments";
    } else if (currentQuiz.assignment_group === "projects") {
      return "Projects";
    } else {
      return "N/A";
    }
  };

  const parseQuizType = () => {
    if (currentQuiz.type === "gradedQuiz") {
      return "Graded Quiz";
    } else if (currentQuiz.type === "practiceQuiz") {
      return "Practice Quiz";
    } else if (currentQuiz.type === "gradedSurvey") {
      return "Graded Survey";
    } else if (currentQuiz.type === "ungradedSurvey") {
      return "Ungraded Survey";
    } else {
      return "N/A";
    }
  };

  const isAuthorized = () => {
    return (
      course &&
      (currentUser.role === "ADMIN" || currentUser._id === course.author)
    );
  };

  return (
    <div>
      {isAuthorized() && (
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
            <button className="btn btn-danger" onClick={() => publishQuiz()}>
              Unpublished
            </button>
          )}

          <button
            style={{
              border: "1px solid rgb(204, 204, 204)",
              borderRadius: "5px",
              padding: "5px 15px",
            }}
            onClick={() =>
              navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/preview`)
            }
          >
            View Last Preview
          </button>

          <button
              style={{
                border: "1px solid rgb(204, 204, 204)",
                borderRadius: "5px",
                padding: "5px 15px",
              }}
              onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`)}
            >
              New Preview Quiz
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

      {(currentUser.role === "USER" || currentUser.role === "STUDENT") &&
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

      {!canTake && !isAuthorized() && (
        <div
          style={{
            backgroundColor: "rgb(248, 233, 229)",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          You cannot take this quiz again
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
          <span>Number of Attempts</span>
          <span>Show Correct Answers</span>
          <span>One Question at a Time</span>
          <span>Access Code</span>
          <span>Webcam Required </span>
          <span>Lock Questions After Answering</span>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <span>{parseQuizType()}</span>
          <span>{!currentQuiz.points ? "N/A" : currentQuiz.points}</span>
          <span>{parseAssignmentGroup()}</span>
          <span>{!currentQuiz.shuffle ? "No" : "Yes"}</span>
          <span>
            {!currentQuiz.time_limit ? "No" : `Yes ${currentQuiz.time} Minutes`}
          </span>
          <span>{!currentQuiz.attempts ? "No" : "Yes"}</span>
          <span>
            {!currentQuiz.attempts ? "1" : currentQuiz.numberOfAttempts}
          </span>
          <span>{currentQuiz.show_correct_answers ? "Yes" : "No"}</span>
          <span>{currentQuiz.one_at_a_time ? "Yes" : "No"}</span>
          <span>
            {currentQuiz.access_code ? currentQuiz.access_code : "None"}
          </span>
          <span>{currentQuiz.webcam ? "Yes" : "No"}</span>
          <span>{currentQuiz.lock_after ? "Yes" : "No"}</span>
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
      <br />
      {(currentUser.role === "USER" || currentUser.role === "STUDENT" && getRecentQuizGrade() !== "Not Taken Yet") && (
        <div>
          <Link to={"/Kanbas/Courses/" + cid + "/Quizzes/" + qid + "/preview"}>
            Last Attempt: {getRecentQuizGrade()}
          </Link>
        </div>
      )}
    </div>
  );
}
