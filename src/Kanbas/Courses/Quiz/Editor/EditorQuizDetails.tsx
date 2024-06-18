import { useLocation, useNavigate, useParams } from "react-router";
import * as client from "./client";
import { useEffect, useState } from "react";

export default function EditorQuizDetails() {
  const { cid, qid } = useParams();
  // Need to make sure when adding a new quiz that the default values are correct (would involve getting obj from server)
  const [quiz, setQuiz] = useState({
    _id: new Date().getTime(),
    title: "",
    instructions: "",
    points: "",
    type: "",
    assignmentGroup: "",
    shuffle: true,
    timeLimit: true,
    time: "",
    attempts: false,
    dueDate: "",
    availableDate: "",
    untilDate: "",
  });

  const fetchCurrentQuiz = async () => {
    const newFetchedQuiz = await client.fetchQuiz(qid);
    setQuiz(newFetchedQuiz);
  };

  useEffect(() => {
    fetchCurrentQuiz();
  }, []);

  function formatDate(date: Date) {
    // Get the year, month, and day from the Date object
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    // Construct the string in yyyy-mm-dd format
    return `${year}-${month}-${day}`;
  }

  console.log(quiz);

  return (
    <div>
      <div className="container">
        <div className="row">
          <input
            className="form-control mt-4"
            value={quiz.title && quiz.title}
            placeholder="Enter a title here"
            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
          ></input>
        </div>
        <div className="mt-3">Quiz Instructions:</div>
        <textarea
          className="form-control mt-1"
          value={quiz.instructions && quiz.instructions}
          placeholder="Enter instructions here"
          onChange={(e) => setQuiz({ ...quiz, instructions: e.target.value })}
        ></textarea>

        <div className="row mt-5 align-items-center">
          <label htmlFor={`quizType${quiz._id}`} className="col-3 text-end">
            Quiz Type:
          </label>
          <div className="col-9">
            <select
              className="form-select me-3"
              id={`quizType${quiz._id}`}
              onChange={(e) => setQuiz({ ...quiz, type: e.target.value })}
              value={quiz.type}
            >
              <option value="gradedQuiz">Graded Quiz</option>
              <option value="practiceQuiz">Practice Quiz</option>
              <option value="gradedSurvey">Graded Survey</option>
              <option value="ungradedSurvey">Ungraded Survey</option>
            </select>
          </div>
        </div>

        <div className="row mt-3 align-items-center">
          <label
            htmlFor={`assignmentGroup${quiz._id}`}
            className="col-3 text-end"
          >
            Assignment Group:
          </label>
          <div className="col-9">
            <select
              className="form-select me-3"
              id={`assignmentGroup${quiz._id}`}
              onChange={(e) =>
                setQuiz({ ...quiz, assignmentGroup: e.target.value })
              }
              value={quiz.type}
            >
              <option value="quizzes">Quizzes</option>
              <option value="exams">Exams</option>
              <option value="assignments">Assignments</option>
              <option value="projects">Projects</option>
            </select>
          </div>
        </div>
        <div className="row mt-3 align-items-center">
          <div className="col-3 text-end"></div>
          <div className="col-9">
            <strong>Options</strong>
            <br />
            <input
              id={`shuffle${quiz._id}`}
              type="checkbox"
              className="form-check-input me-2"
              onChange={(e) => setQuiz({ ...quiz, shuffle: e.target.checked })}
            ></input>
            <label className="form-check-label" htmlFor={`shuffle${quiz._id}`}>
              Shuffle Answers
            </label>
            <div className="d-flex flex-row align-items-center">
              <div className="me-3">
                <input
                  id={`timeLimit${quiz._id}`}
                  type="checkbox"
                  className="form-check-input me-2"
                  onChange={(e) =>
                    setQuiz({ ...quiz, timeLimit: e.target.checked })
                  }
                ></input>
                <label
                  className="form-check-label"
                  htmlFor={`timeLimit${quiz._id}`}
                >
                  Time Limit
                </label>
              </div>
              <div>
                <input
                  id={`time${quiz._id}`}
                  className="form-control"
                  value={quiz.time && quiz.time}
                  onChange={(e) => setQuiz({ ...quiz, time: e.target.value })}
                ></input>
              </div>
              <div>
                <label className="ms-1" htmlFor={`time${quiz._id}`}>
                  Minutes
                </label>
              </div>
            </div>
            <input
              id={`attempts${quiz._id}`}
              type="checkbox"
              className="form-check-input me-2"
              onChange={(e) => setQuiz({ ...quiz, attempts: e.target.checked })}
            ></input>
            <label className="form-check-label" htmlFor={`attempts${quiz._id}`}>
              Allow Multiple Attemps
            </label>
          </div>
        </div>
        <div className="row mt-3 align-items-center">
          <div className="col-3 text-end">Assign</div>
          <div className="col-9 border">
            <div className="ms-2">
              <div className="mt-3 d-flex">
                <label htmlFor={`due${quiz._id}`} className="form-label">
                  <strong>Due</strong>
                </label>
                <input
                  type="date"
                  className="form-control mb-2"
                  id={`due${quiz._id}`}
                  value={formatDate(new Date(quiz.dueDate))}
                  onChange={(e) =>
                    setQuiz({ ...quiz, dueDate: e.target.value })
                  }
                ></input>
                <div className="row">
                  <div className="col">
                    <label htmlFor={`availableFrom${quiz._id}`}>
                      <strong>Available from</strong>
                    </label>
                  </div>
                  <div className="col">
                    <label htmlFor={`availableUntil${quiz._id}`}>
                      <strong>Until</strong>
                    </label>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <input
                      type="date"
                      className="form-control"
                      id={`availableFrom${quiz._id}`}
                      value={formatDate(new Date(quiz.availableDate))}
                      onChange={(e) =>
                        setQuiz({
                          ...quiz,
                          availableDate: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                  <div className="col">
                    <input
                      type="date"
                      className="form-control"
                      id={`availableUntil${quiz._id}`}
                      min="2024-05-06"
                      value={formatDate(new Date(quiz.untilDate))}
                      onChange={(e) =>
                        setQuiz({
                          ...quiz,
                          untilDate: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
