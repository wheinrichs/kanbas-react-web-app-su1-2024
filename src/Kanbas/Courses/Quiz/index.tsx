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
import * as client5 from "../client";

// Define the Grade type
interface Grade {
  quizID: string;
  grade: number;
}

export default function Quizzes(course: any) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { currentCourses } = useSelector(
    (state: any) => state.currentCoursesReducer
  );
  let currentDate = new Date();
  const { cid } = useParams();
  const navigate = useNavigate();
  const { quizzes } = useSelector((state: any) => state.quizReducer);
  const [quiz, setQuiz] = useState({
    points: "",
    courseID: cid,
    until_date: "",
    available_date: "",
  });
  const [publishedCourses, setPublishedCourses] = useState<any[]>([]);
  
  const [quizStates, setQuizStates] = useState<{ [key: string]: boolean }>({});
  const [questionsLength, setQuestionsLength] = useState<{
    [key: string]: number;
  }>({});
  const dispatch = useDispatch();

  //trigger rerender
  const [publish, setPublish] = useState(true);
  const [courseAuthor, setCourseAuthor] = useState();

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

  const fetchPublishedCourses = async () => {
    const courses = await client5.fetchPublishedCourses();
    setPublishedCourses(courses);
  };

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
    console.log(publishedCourses)
    fetchQuizzes();
    fetchGrades();
    fetchPublishedCourses();
  }, [publish, currentCourses]);

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

  // if (publishedCourses.length === 0) {
  //   return <div>Loading...</div>;
  // }
  
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

  const checkQuizAvailability = (quiz: any) => {
    if (currentDate < new Date(quiz.available_date)) {
      return (`Not available until ${new Date(quiz.available_date).toLocaleDateString()}`);
    } else if (currentDate <= new Date(quiz.until_date)) {
      return ("Available");
    } else {
      return ("Closed");
    }
    // if (quiz.available_date)
  };

  console.log(course.author);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Quiz Section</h1>
      <hr />
      {(currentUser.role === "ADMIN" ||
        currentUser._id ===
          (course.author)) && (
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
                style={{ color: !quiz.published ? "black" : "green" }}
              />
            </div>
            <div style={{ marginRight: "24px", marginLeft: "12px" }}>
              <h4 style={{ fontSize: "16px", margin: "0px" }}>
                {(currentUser.role === "ADMIN" ||
                currentUser._id ===
                  course.author ||
                (quiz.published && new Date(quiz.available_date) <= currentDate &&
                currentDate <= new Date(quiz.until_date))) ? (
                  <Link
                    to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/details`}
                  >
                    {quiz.title}
                  </Link>
                ) : (
                  quiz.title
                )}
              </h4>

              <div
                style={{ fontSize: "12px", display: "flex", columnGap: "12px" }}
              >
                <span>
                  {checkQuizAvailability(quiz)}
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

          {(currentUser.role === "ADMIN" ||
            currentUser._id ===
              course.author) && (
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
          )}
          {currentUser.role !== "ADMIN" &&
            currentUser._id !==
              course.author && (
              <div className="me-2">
                {!quiz.published ? (
                  <FaBan />
                ) : (
                  <FaCheckCircle style={{ color: "green" }} />
                )}
              </div>
            )}
        </div>
      ))}
    </div>
  );
}
