import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import * as client from "./Editor/QuestionEditor/client";
import { Link } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { setQuizQuestions } from "./reducer";
import * as client2 from "./client";
import * as client5 from "../client";

export default function QuizPreview() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [publishedCourses, setPublishedCourses] = useState<any[]>([]);
  const { cid, id } = useParams();
  const qid = id;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [userGrades, setUserGrades] = useState<any>([]);
  const { quiz_questions } = useSelector((state: any) => state.quizReducer);

  const fetchUserGrades = async () => {
    const userGradesResponse = await client2.getQuizGradeByUserID(currentUser._id);
    setUserGrades(userGradesResponse);
  };

  const fetchQuizQuestions = async () => {
    const quizQuestionsNew = await client.fetchQuizQuestions(qid);
    dispatch(setQuizQuestions(quizQuestionsNew));
  };

  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<any>({});
  const [selectedAnswers, setSelectedAnswers] = useState<any[][]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [questionStatus, setQuestionStatus] = useState<boolean[]>([]);
  const [grade, setGrade] = useState<number | null>(null);
  const [lastGrade, setLastGrade] = useState<any>();

  const fetchPublishedCourses = async () => {
    const courses = await client5.fetchPublishedCourses();
    setPublishedCourses(courses);
  };

  useEffect(() => {
    const initializeData = async () => {
      await fetchQuizQuestions();
      await fetchPublishedCourses();
      await fetchUserGrades();
    };

    initializeData().catch(console.error);
  }, []);

  useEffect(() => {
    if (userGrades.length > 0) {
      setLastGrade(userGrades[userGrades.length - 1]);
      setSelectedAnswers(userGrades[userGrades.length - 1].studentChoices || Array(quiz_questions.length).fill([-1]));
      setQuizFinished(true);
      calculateGrade();
    }
  }, [userGrades]);

  useEffect(() => {
    if (quiz_questions.length > 0) {
      setCurrentQuestion(quiz_questions[currentQuestionNumber]);
      if (selectedAnswers.length === 0) {
        setSelectedAnswers(Array(quiz_questions.length).fill([-1]));
      }
    }
  }, [currentQuestionNumber, quiz_questions]);

  const handleNext = () => {
    if (currentQuestionNumber < quiz_questions.length - 1) {
      setCurrentQuestionNumber(currentQuestionNumber + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionNumber > 0) {
      setCurrentQuestionNumber(currentQuestionNumber - 1);
    }
  };

  const handleAnswerSelect = (index: number) => {
    console.log("selected answers", selectedAnswers);
    console.log("there are this many questions ", quiz_questions.length);
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionNumber] = [index];
    setSelectedAnswers(updatedAnswers);
  };

  const handleAnswerSelectMultiple = (index: number, isChecked: boolean) => {
    console.log("selected answers", selectedAnswers);
    console.log("there are this many questions ", quiz_questions.length);
    const updatedAnswers = [...selectedAnswers];
    let theseAnswers = updatedAnswers[currentQuestionNumber] || [];

    if (isChecked) {
      if (theseAnswers.includes(-1)) {
        theseAnswers = theseAnswers.filter((answer) => answer !== -1);
      }
      theseAnswers.push(index);
    } else {
      if (theseAnswers.length === 1) {
        theseAnswers.push(-1);
      }
      theseAnswers = theseAnswers.filter((answer) => answer !== index);
    }

    updatedAnswers[currentQuestionNumber] = theseAnswers;
    setSelectedAnswers(updatedAnswers);
  };

  const handleAnswerText = (e: React.ChangeEvent<HTMLInputElement>, blankIndex: any) => {
    const answer = e.target.value;
    setSelectedAnswers((prevSelectedAnswers) => {
      const updatedAnswers = [...prevSelectedAnswers];
      if (prevSelectedAnswers[currentQuestionNumber][0] == -1 as any && prevSelectedAnswers[currentQuestionNumber].length === 1) {
        updatedAnswers[currentQuestionNumber]= []
        for(let i=0; i < currentQuestion.choices.length; i++) {
          updatedAnswers[currentQuestionNumber]=[...updatedAnswers[currentQuestionNumber], -1]
        }
      }
      if((prevSelectedAnswers[currentQuestionNumber].length - 1) >= blankIndex) {
        updatedAnswers[currentQuestionNumber][blankIndex] = answer;
      }
        return updatedAnswers;
    });
  };

  const isChecked = (index: number) => {
    return selectedAnswers[currentQuestionNumber]?.includes(index) || false;
  };

  const calculateGrade = () => {
    if (selectedAnswers.length === 0) return;
    const status = [];

    for (let i = 0; i < quiz_questions.length; i++) {
      let isCorrect = true;
      for (let j = 0; j < quiz_questions[i].answers?.length; j++) {
        if (selectedAnswers[i] === undefined || selectedAnswers[i][j] === undefined) {
          isCorrect = false;
          break;
        }
        if (
          (quiz_questions[i].type === "fillIn" &&
            quiz_questions[i].answers[j]?.includes(selectedAnswers[i][j])) ||
          (quiz_questions[i].type !== "fillIn" &&
            quiz_questions[i].answers[j]?.includes(
              quiz_questions[i].choices[selectedAnswers[i][j]]
            ))
        ) {
        } else {
          isCorrect = false;
          break;
        }
      }
      status.push(isCorrect);
    }
    setQuestionStatus(status);
  };

  return (
    <div>
      <h1>
        <b>Quiz Title PREVIEW!</b>
      </h1>
      <h3>Received Score: {lastGrade?.grade ?? "No grade yet"}%</h3>
      <h3>Date Submitted: {new Date(lastGrade?.timeTaken).toLocaleDateString("en-US")}</h3>
      {currentUser.role === "ADMIN" || currentUser.role === "FACULTY" ? (
        <div
          style={{
            backgroundColor: "rgb(248, 233, 229)",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          This is a preview of the published version of the quiz.
        </div>
      ) : null}
      <br></br>
      Started:
      <h1>
        <b>Quiz Instructions</b>
      </h1>
      <hr />
      <div
        style={{
          border: "1px solid rgb(204, 204, 204)",
          display: "block",
          paddingBottom: "15px",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid rgb(204, 204, 204)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            backgroundColor: quizFinished
              ? questionStatus[currentQuestionNumber]
                ? "lightgreen"
                : "lightcoral"
              : "rgb(245, 245, 245)",
          }}
        >
          <h3>
            <b>Question {currentQuestionNumber + 1}</b>
          </h3>
          <h4>{currentQuestion.points} pts</h4>
        </div>
        <br />
        <div
          style={{
            marginLeft: "20px",
          }}
        >
          {currentQuestion.question}
        </div>

        <ul className="list-group mt-3">
          {currentQuestion &&
            currentQuestion.type === "multiple" &&
            currentQuestion.answers?.length > 1 &&
            currentQuestion.choices.map((q: any, i: number) => (
              <div key={i}>
                <hr />
                <div
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    name={"question" + (currentQuestionNumber + 1).toString()}
                    value={"option" + (currentQuestionNumber + 1).toString()}
                    checked={isChecked(i)}
                    onChange={(e) =>
                      handleAnswerSelectMultiple(i, e.target.checked)
                    }
                    disabled={quizFinished}
                  />
                  <label style={{ marginLeft: "10px" }}>{q}</label>
                </div>
              </div>
            ))}
          {currentQuestion &&
            currentQuestion.type === "multiple" &&
            currentQuestion.answers?.length === 1 &&
            currentQuestion.choices.map((q: any, i: number) => (
              <div key={i}>
                <hr />
                <div
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  <input
                    type="radio"
                    name={"question" + (currentQuestionNumber + 1).toString()}
                    value={"option" + (currentQuestionNumber + 1).toString()}
                    checked={selectedAnswers[currentQuestionNumber]?.includes(i)}
                    onChange={() => handleAnswerSelect(i)}
                    disabled={quizFinished}
                  />
                  <label style={{ marginLeft: "10px" }}>{q}</label>
                </div>
              </div>
            ))}
          {currentQuestion &&
            currentQuestion.type === "trueFalse" &&
            currentQuestion.choices.map((q: any, i: number) => (
              <div key={i}>
                <hr />
                <div
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  <input
                    type="radio"
                    name={"question" + (currentQuestionNumber + 1).toString()}
                    value={"option" + (currentQuestionNumber + 1).toString()}
                    checked={selectedAnswers[currentQuestionNumber]?.includes(i)}
                    onChange={() => handleAnswerSelect(i)}
                    disabled={quizFinished}
                  />
                  <label style={{ marginLeft: "10px" }}>{q}</label>
                </div>
              </div>
            ))}
          {currentQuestion && currentQuestion.type === "fillIn" && (
            <div>
              <hr />
              {currentQuestion.choices.map((blank: any, blankIndex: any) => (
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                <input
                  type="text"
                  name={"question" + (currentQuestionNumber + 1).toString()}
                  value={selectedAnswers[currentQuestionNumber]?.[blankIndex] || ""}
                  readOnly={quizFinished}
                  onChange={(e) => (handleAnswerText(e, blankIndex))}
                  style={{
                    backgroundColor: "lightgrey",
                  }}
                />
              </div>))}
            </div>
          )}
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            border: "1px solid rgb(204, 204, 204)",
            backgroundColor: "rgb(245, 245, 245)",
            padding: "5px 15px",
          }}
          onClick={handlePrevious}
        >
          Previous
        </button>

        <button
          style={{
            border: "1px solid rgb(204, 204, 204)",
            backgroundColor: "rgb(245, 245, 245)",
            padding: "5px 15px",
          }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      {(currentUser.role === "ADMIN" ||
        (publishedCourses.length > 0 &&
          currentUser._id === publishedCourses.find((c: any) => c._id === cid)?.author)) && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            border: "1px solid rgb(204, 204, 204)",
            backgroundColor: "rgb(245, 245, 245)",
            alignItems: "center",
            columnGap: "5px",
            padding: "5px 15px",
            marginTop: "25px",
          }}
        >
          <Link to={"/Kanbas/Courses/" + cid + "/Quizzes/Editor/" + qid} style={{ color: "inherit", textDecoration: "none" }}>
            <FaPencil></FaPencil> Keep Editing This Quiz
          </Link>
        </div>
      )}
      <br></br>
      <h3>Questions</h3>
      <div style={{ marginLeft: "30px" }}>
        <span style={{ marginLeft: "5px", color: "rgb(171, 32, 34)", fontWeight: "bold" }}>
          {quiz_questions.map((q: any, i: number) => (
            <div style={{ marginLeft: "10px" }} key={i}>
              <button
                style={{ border: "1px solid rgb(255, 255, 255)", backgroundColor: "rgb(255, 255, 255)" }}
                className="text-danger"
                onClick={() => setCurrentQuestionNumber(i)}
              >
                <b>Question {i + 1}</b>
              </button>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
}
