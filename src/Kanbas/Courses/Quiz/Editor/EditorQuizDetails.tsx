import { useLocation, useNavigate, useParams } from "react-router";
import * as client from "./client";
import { useEffect, useState } from "react";
import RichTextEditor from "../../../../Labs/Lab5/RichTextEditor";

export default function EditorQuizDetails({
  quiz,
  setQuiz,
}: {
  quiz: any;
  setQuiz: (q: any) => void;
}) {
  const { cid, qid } = useParams();

  function formatDate(date: Date) {
    // Get the year, month, and day from the Date object
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    // Construct the string in yyyy-mm-dd format
    return `${year}-${month}-${day}`;
  }

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
        <RichTextEditor
          initialData={quiz.instructions || ""}
          setter={setQuiz}
          setterOGObject={quiz}
          propertyToWrite={"instructions"}
        />

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

        <div className="row align-items-center mt-4">
          <label htmlFor={`points${quiz._id}`} className="col-3 text-end">
            Points:
          </label>
          <div className="col-9">
            <input
              className="form-control"
              id={`points${quiz._id}`}
              value={quiz.points && quiz.points}
              placeholder="Enter point total here"
              onChange={(e) => setQuiz({ ...quiz, points: e.target.value })}
            ></input>{" "}
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
                setQuiz({ ...quiz, assignment_group: e.target.value })
              }
              value={quiz.assignment_group}
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
              checked={quiz.shuffle}
              className="form-check-input me-2"
              onChange={(e) => setQuiz({ ...quiz, shuffle: e.target.checked })}
            ></input>
            <label className="form-check-label" htmlFor={`shuffle${quiz._id}`}>
              Shuffle Answers
            </label>
            <br />

            <input
              id={`lcok${quiz._id}`}
              type="checkbox"
              checked={quiz.lock_after}
              className="form-check-input me-2"
              onChange={(e) =>
                setQuiz({ ...quiz, lock_after: e.target.checked })
              }
            ></input>
            <label className="form-check-label" htmlFor={`lock${quiz._id}`}>
              Lock Question After Answering
            </label>
            <br />

            <input
              id={`showCorrect${quiz._id}`}
              type="checkbox"
              checked={quiz.show_correct_answers}
              className="form-check-input me-2"
              onChange={(e) =>
                setQuiz({ ...quiz, show_correct_answers: e.target.checked })
              }
            ></input>
            <label
              className="form-check-label"
              htmlFor={`showCorrect${quiz._id}`}
            >
              Show Correct Answers After Answering
            </label>
            <br />

            <input
              id={`webcam${quiz._id}`}
              type="checkbox"
              checked={quiz.webcam}
              className="form-check-input me-2"
              onChange={(e) => setQuiz({ ...quiz, webcam: e.target.checked })}
            ></input>
            <label className="form-check-label" htmlFor={`webcam${quiz._id}`}>
              Webcam Required
            </label>
            <br />

            <input
              id={`oneAtATime${quiz._id}`}
              type="checkbox"
              checked={quiz.one_at_a_time}
              className="form-check-input me-2"
              onChange={(e) =>
                setQuiz({ ...quiz, one_at_a_time: e.target.checked })
              }
            ></input>
            <label
              className="form-check-label"
              htmlFor={`oneAtATime${quiz._id}`}
            >
              One Question At A Time
            </label>

            <div className="d-flex flex-row align-items-center">
              <div className="me-3">
                <input
                  id={`timeLimit${quiz._id}`}
                  type="checkbox"
                  checked={quiz.time_limit}
                  className="form-check-input me-2"
                  onChange={(e) =>
                    setQuiz({ ...quiz, time_limit: e.target.checked })
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
              checked={quiz.attempts}
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
              <div className="mt-3">
                <label htmlFor={`due${quiz._id}`} className="form-label">
                  <strong>Due</strong>
                </label>
                <input
                  type="date"
                  className="form-control mb-2"
                  id={`due${quiz._id}`}
                  value={formatDate(new Date(quiz.due_date))}
                  onChange={(e) =>
                    setQuiz({ ...quiz, due_date: e.target.value })
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
                      value={formatDate(new Date(quiz.available_date))}
                      onChange={(e) =>
                        setQuiz({
                          ...quiz,
                          available_date: e.target.value,
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
                      value={formatDate(new Date(quiz.until_date))}
                      onChange={(e) =>
                        setQuiz({
                          ...quiz,
                          until_date: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-4">
          <label htmlFor={`accessCode${quiz._id}`} className="col-3 text-end">
            Access Code:
          </label>
          <div className="col-9">
            <input
              className="form-control"
              id={`accessCode${quiz._id}`}
              value={quiz.access_code && quiz.access_code}
              placeholder="Enter an access code"
              onChange={(e) =>
                setQuiz({ ...quiz, access_code: e.target.value })
              }
            ></input>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
