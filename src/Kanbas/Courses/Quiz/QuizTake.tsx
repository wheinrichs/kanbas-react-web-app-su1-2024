import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import * as db from "../../Database";
import { setQuizQuestions } from "./reducer";
import { useEffect, useRef, useState } from "react";
import * as client from "./Editor/QuestionEditor/client";
import { Link } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { updateSourceFile } from "typescript";

export default function QuizTake() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid, id } = useParams();
  // TODO: NOT going to use the quiz id right now (which is "id")-- we are going to use the database id... temporarily
  const qid = id;
  const { pathname } = useLocation();

  const { quiz_questions } = useSelector((state: any) => state.quizReducer);

  const fetchQuizQuestions = async () => {
    // Add database fetch
    const quizQuestionsNew = await client.fetchQuizQuestions(qid);
    // Local set
    dispatch(setQuizQuestions(quizQuestionsNew));
    console.log(quiz_questions);
  };

  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<any>({});
  const [selectedAnswers, setSelectedAnswers] = useState<any[][]>(
    Array(quiz_questions.length).fill([-1])
  );
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeStarted, setTimeStarted] = useState<string>("");

  const textInputRef = useRef<string>("");

  useEffect(() => {
    // Set the start time once when the component mounts
    const startTime = new Date().toLocaleString();
    fetchQuizQuestions();
    setTimeStarted(startTime);
  }, []);

  useEffect(() => {
    if (quiz_questions.length > 0) {
      setCurrentQuestion(quiz_questions[currentQuestionNumber]);
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

  // Handle selecting a single answer in a single-choice question
  const handleAnswerSelect = (index: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionNumber] = [index];
    setSelectedAnswers(updatedAnswers);
  };

  const handleAnswerText = (answer: string) => {
    textInputRef.current = answer;
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionNumber] = [textInputRef.current];
    setSelectedAnswers(updatedAnswers);
  };
  // Handling selecting multiple answers (or potentially just one) in a multiple-answer question
  const handleAnswerSelectMultiple = (index: number, isChecked: boolean) => {
    const updatedAnswers = [...selectedAnswers];

    let theseAnswers = [...updatedAnswers[currentQuestionNumber]];

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

  // helper function for handling multiple-answer questions
  const isChecked = (index: number) => {
    return selectedAnswers[currentQuestionNumber]?.includes(index) || false;
  };

  // calculating the final grade
  // TODO: STORE THE GRADE IN THE DATABASE UNDER THE USER ENTRY. CURRENTLY, IT'S JUST DISPLAYED AND STORED.
  // ALSO DISABLE THE QUIZ FUNCTIONALITY ONCE COMPLETED?
  // ALSO PREVENT THIS VALUE FROM POSSIBLY CHANGING?
  const calculateGrade = () => {
    let correctQuestions = quiz_questions.length;
    if (quizFinished) {
      for (let i = 0; i < quiz_questions.length; i++) {
        for (let j = 0; j < quiz_questions[i].answers.length; j++) {
          if (
            !quiz_questions[i].answers.includes(
              quiz_questions[i].choices[selectedAnswers[i][j]]
            ) ||
            selectedAnswers[i].includes(-1)
          ) {
            correctQuestions -= 1;
            break;
          }
        }
      }
    }
    return ((correctQuestions * 1.0) / quiz_questions.length) * 100.0;
  };

  return (
    <div>
      <h1>
        <b>{currentQuestion.title}</b>
      </h1>
      {/* TODO: add icons, like exclamation point logo, for style */}
      {(currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (
        <div
          style={{
            backgroundColor: "rgb(248, 233, 229)",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          This is a preview of the published version of the quiz.
        </div>
      )}
      <br></br>
      Started: {timeStarted}
      <h1>
        <b>Quiz Instructions</b>
      </h1>
      <hr></hr>
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
            backgroundColor: "rgb(245, 245, 245)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <h3>
            <b>Question {currentQuestionNumber + 1}</b>
          </h3>

          <h4>{currentQuestion.points} pts</h4>
        </div>
        <br></br>
        <div style={{ marginLeft: "20px" }}>{currentQuestion.question}</div>

        <ul className="list-group mt-3">
          {currentQuestion &&
            currentQuestion.type === "multiple" &&
            currentQuestion.answers.length > 1 &&
            currentQuestion.choices.map((q: any, i: number) => (
              <div key={i}>
                <hr></hr>
                <div style={{ marginLeft: "10px" }}>
                  <input
                    type="checkbox"
                    name={"question" + (currentQuestionNumber + 1).toString()}
                    value={"option" + (currentQuestionNumber + 1).toString()}
                    checked={isChecked(i)}
                    onChange={(e) =>
                      handleAnswerSelectMultiple(i, e.target.checked)
                    }
                  />
                  <label style={{ marginLeft: "10px" }}>{q}</label>
                </div>
              </div>
            ))}
          {currentQuestion &&
            currentQuestion.type === "multiple" &&
            currentQuestion.answers.length === 1 &&
            currentQuestion.choices.map((q: any, i: number) => (
              <div key={i}>
                <hr></hr>
                <div style={{ marginLeft: "10px" }}>
                  <input
                    type="radio"
                    name={"question" + (currentQuestionNumber + 1).toString()}
                    value={"option" + (currentQuestionNumber + 1).toString()}
                    checked={selectedAnswers[currentQuestionNumber]?.includes(
                      i
                    )}
                    onChange={() => handleAnswerSelect(i)}
                  />
                  <label style={{ marginLeft: "10px" }}>{q}</label>
                </div>
              </div>
            ))}
          {currentQuestion &&
            currentQuestion.type === "trueFalse" &&
            currentQuestion.choices.map((q: any, i: number) => (
              <div key={i}>
                <hr></hr>
                <div style={{ marginLeft: "10px" }}>
                  <input
                    type="radio"
                    name={"question" + (currentQuestionNumber + 1).toString()}
                    value={"option" + (currentQuestionNumber + 1).toString()}
                    checked={selectedAnswers[currentQuestionNumber]?.includes(
                      i
                    )}
                    onChange={() => handleAnswerSelect(i)}
                  />
                  <label style={{ marginLeft: "10px" }}>{q}</label>
                </div>
              </div>
            ))}
          {currentQuestion && currentQuestion.type === "fillIn" && (
            <div>
              <hr></hr>
              <div style={{ marginLeft: "10px" }}>
                <input
                  type="text"
                  name={"question" + (currentQuestionNumber + 1).toString()}
                  onChange={(e) => handleAnswerText(e.target.value)}
                />
              </div>
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
        {/* // clicking any further backward or forward if you are at the first or last question wont do anything but it might be better to disable the button */}
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          border: "1px solid rgb(204, 204, 204)",
          alignItems: "center",
          columnGap: "20px",
          padding: "10px",
          marginTop: "25px",
        }}
      >
        Quiz saved at {new Date().toLocaleString()}
        <button
          style={{
            border: "1px solid rgb(204, 204, 204)",
            backgroundColor: "rgb(245, 245, 245)",
            padding: "5px 15px",
          }}
          onClick={() => setQuizFinished(true)}
        >
          Submit Quiz
        </button>
      </div>
      {quizFinished && (
        <div>
          You've submitted your quiz! Your score is a {calculateGrade()}%!
        </div>
      )}
      {(currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (
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
          <Link
            to={"/Kanbas/Courses/" + cid + "/Quizzes/Editor/" + qid}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaPencil></FaPencil> Keep Editing This Quiz
          </Link>
        </div>
      )}
      <br></br>
      <h3>Questions</h3>
      <div style={{ marginLeft: "30px" }}>
        <span
          style={{
            marginLeft: "5px",
            color: "rgb(171, 32, 34)",
            fontWeight: "bold",
          }}
        >
          {quiz_questions.map((q: any, i: number) => (
            <div style={{ marginLeft: "10px" }}>
              <button
                style={{
                  border: "1px solid rgb(255, 255, 255)",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
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
