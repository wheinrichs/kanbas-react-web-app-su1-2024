import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBan, FaRocket, FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { addQuiz, setQuizzes, deleteQuiz } from "./reducer";
import * as client from "./client";
import SampleInteractQuizGrade from "./SampleInteractQuizGrade";
import * as clientEditor from "./Editor/client";
import * as client4 from "./Editor/QuestionEditor/client";

// Define the Grade type
interface Grade {
  quizID: string;
  grade: number;
}

export default function Quizzes() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { currentCourses } = useSelector(
    (state: any) => state.currentCoursesReducer
  );
  let currentDate = new Date();
  const { cid } = useParams();
  const navigate = useNavigate();
  const { quizzes } = useSelector((state: any) => state.quizReducer);
  const [quiz, setQuiz] = useState({
    title: "",
    points: "",
    courseID: cid,
  });
  const [quizStates, setQuizStates] = useState<{ [key: string]: boolean }>({});
  const [questionsLength, setQuestionsLength] = useState<{
    [key: string]: number;
  }>({});
  const dispatch = useDispatch();

  //trigger rerender
  const [publish, setPublish] = useState(true);

  const removeQuiz = async (quizToDelete: any) => {
    try {
      await clientEditor.deleteQuiz(quizToDelete._id);
      dispatch(deleteQuiz(quizToDelete._id));
    } catch (error) {
      console.error("Failed to delete the quiz", error);
    }
  };

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

  const [allGrades, setAllGrades] = useState<Grade[]>([]); // Type the state

  const fetchGrades = async () => {
    const fetchedAllGrades = await client.getQuizGradeByUserID(currentUser._id);
    setAllGrades(fetchedAllGrades);
  };

  const fetchQuizQuestionsLength = async (qid: string) => {
    const quizQuestions = await client4.fetchQuizQuestions(qid);
    setQuestionsLength((prev) => ({
      ...prev,
      [qid]: quizQuestions.length,
    }));
  };

  useEffect(() => {
    fetchQuizzes();
    fetchGrades();
  }, [publish]);

  useEffect(() => {
    quizzes.forEach((quiz: any) => {
      fetchQuizQuestionsLength(quiz._id);
    });
    const initialStates = quizzes.reduce((acc: any, quiz: any) => {
      acc[quiz._id] = true; // true for FaBan, false for FaCheckCircle
      return acc;
    }, {});
    setQuizStates(initialStates);
  }, [quizzes]);

  const toggleIcon = (quizId: string) => {
    setQuizStates((prevStates) => ({
      ...prevStates,
      [quizId]: !prevStates[quizId],
    }));
  };

  const getRecentQuizGrade = (qid: string) => {
    const recentGrades = allGrades.filter((g) => g.quizID === qid);
    if (recentGrades.length === 0) return "Not Taken Yet"; // Handle case with no grades
    const recentGrade = recentGrades[recentGrades.length - 1];
    return recentGrade.grade + "%";
  };

  const navigateToDetails = (quizId: string) => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/details`);
  };

  const publishQuiz = async (qid: any, currentQuiz: any) => {
    const newQuiz = await clientEditor.updateQuiz(qid, {
      ...currentQuiz,
      published: true,
    });
    //trigger rerender
    setPublish(!publish);
  };

  const unpublishQuiz = async (qid: any, currentQuiz: any) => {
    const newQuiz = await clientEditor.updateQuiz(qid, {
      ...currentQuiz,
      published: false,
    });
    //trigger rerender
    setPublish(!publish);
  };

  console.log(JSON.stringify(quizzes.map((m: any) => m.published)));

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Quiz Section</h1>
      <hr />
      {(currentUser.role === "ADMIN" ||
        currentUser._id ===
          currentCourses.find((c: any) => c._id === cid).author) && (
        <button
          className="btn btn-danger"
          onClick={createNewQuizLocalAndServer}
          style={{ marginTop: "20px", marginBottom: "20px", width: "10%" }}
        >
          + Quiz
        </button>
      )}
      <div
        style={{
          marginTop: "12px",
          paddingTop: "20px",
          backgroundColor: "rgb(245, 245, 245)",
          border: "1px solid rgb(199, 205, 209)",
          padding: "12px 6px 12px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h6>▾ Assignment Quizzes</h6>
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
              <FaRocket
                style={{ color: quizStates[quiz._id] ? "black" : "green" }}
              />
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
                  <b>Due</b>{" "}
                  {!quiz.due_date
                    ? "N/A"
                    : new Date(quiz.due_date).toLocaleDateString("en-US")}
                </span>
                <span>{quiz.points ? quiz.points : "?"} pts</span>
                <span>{questionsLength[quiz._id] ?? 0} Questions</span>
                <span>
                  {" "}
                  | <b>Last Attempt: </b> {getRecentQuizGrade(quiz._id)}
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              columnGap: "20px",
              marginRight: "20px",
              alignItems: "center",
            }}
          >
            {!quiz.published ? (
              <FaBan onClick={() => publishQuiz(quiz._id, quiz)} />
            ) : (
              <FaCheckCircle
                onClick={() => unpublishQuiz(quiz._id, quiz)}
                style={{ color: "green" }}
              />
            )}
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id={`dropdownMenuButton-${quiz._id}`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaEllipsisV />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby={`dropdownMenuButton-${quiz._id}`}
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => navigateToDetails(quiz._id)}
                  >
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => removeQuiz(quiz)}
                  >
                    Delete
                  </button>
                </li>
                <li>
                  {quiz.published ? (
                    <button
                      className="dropdown-item"
                      onClick={() => unpublishQuiz(quiz._id, quiz)}
                    >
                      Unpublish
                    </button>
                  ) : (
                    <button
                      className="dropdown-item"
                      onClick={() => publishQuiz(quiz._id, quiz)}
                    >
                      Publish
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}

      {/* <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <SampleInteractQuizGrade />
      </div> */}
    </div>
  );
}
