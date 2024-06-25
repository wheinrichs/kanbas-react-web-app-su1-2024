import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import { setQuizzes } from "./reducer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as client from "./client";
import { FaPencil } from "react-icons/fa6";

export default function QuizDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cid, qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // this might break it
  const [currentQuiz, setCurrentQuiz] = useState<any>({
    title: "",
    points: "",
    courseID: cid,
  });
  // title: "Sample title",
  // points: "15",
  // courseID: "6669b6d40ac49e5be88cf459",
  // available_date: "1/28/2024 11:00 PM",
  // due_date: "1/31/2024 11:00 PM",
  // instructions: "meow",
  // type: "gradedQuiz",
  // assignment_group: "quizzes",
  // shuffle: true,
  // time_limit: true,
  // time: "20",
  // attempts: false,
  // until_date: "1/31/2024 11:00 PM",
  // show_correct_answers: false,
  // one_at_a_time: true,
  // webcam: false,
  // lock_after: false,
  // access_code: "meow",

  const fetchCurrentQuiz = async () => {
    const newFetchedQuiz = await client.fetchQuiz(qid);
    setCurrentQuiz(newFetchedQuiz);
  };

  useEffect(() => {
    console.log(cid);
    console.log(qid);
    console.log(currentQuiz);
    fetchCurrentQuiz();
  }, []);

  return (
    <div>
      {(currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (
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
              backgroundColor: "green",
              border: "1px solid rgb(204, 204, 204)",
              borderRadius: "5px",
              padding: "5px 15px",
              color: "white",
            }}
          >
            Published
          </button>

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
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor/${qid}`)}
          >
            {" "}
            <FaPencil /> Edit
          </button>
          <hr></hr>
        </div>
      )}

      {(currentUser.role === "USER" || currentUser.role === "STUDENT") && (
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
            {!currentQuiz.shuffle ? "N/A" : currentQuiz.shuffle.toString()}
          </span>
          <span>
            {!currentQuiz.time_limit ? "N/A" : currentQuiz.shuffle.toString()}
          </span>
          <span>
            {!currentQuiz.attempts ? "N/A" : currentQuiz.shuffle.toString()}
          </span>
          <span>
            {!currentQuiz.show_correct_answers
              ? "N/A"
              : currentQuiz.shuffle.toString()}
          </span>
          <span>
            {!currentQuiz.one_at_a_time
              ? "N/A"
              : currentQuiz.shuffle.toString()}
          </span>
          <span>
            {!currentQuiz.webcam ? "N/A" : currentQuiz.shuffle.toString()}
          </span>
          <span>
            {!currentQuiz.lock_after ? "N/A" : currentQuiz.shuffle.toString()}
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
          {!currentQuiz.due_date ? "N/A" : currentQuiz.due_date}
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
          {!currentQuiz.available_date ? "N/A" : currentQuiz.available_date}
        </span>
        <span
          style={{
            width: "25%",
            borderBottom: "1px solid rgb(136, 136, 136)",
            padding: "16px 0px",
          }}
        >
          {!currentQuiz.until_date ? "N/A" : currentQuiz.until_date}
        </span>
      </div>
    </div>
  );
}
