import { useDispatch } from "react-redux";
import { cancelEditQuizQuestion, updateQuizQuestion } from "../../reducer";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import TrueFalseEditor from "./TrueFalseEditor";
import FillInBlank from "./FillInBlank";
import * as client from "./client"

export default function EditorSingleQuestion({
  questionParam,
  resetQuestion,
}: {
  questionParam: any;
  resetQuestion: () => void;
}) {
  const dispatch = useDispatch();
  // qid is the quiz id
  const { cid, qid } = useParams();

  const [question, setQuestion] = useState({ ...questionParam });

  const [arrayCorrectAnswerIndex, setArrayCorrectAnswerIndex] = useState(
    [] as any
  );

  useEffect(() => {
    if (questionParam.answers && questionParam.choices) {
      setArrayCorrectAnswerIndex(questionParam.choices.map((q: any, qi: any) => 
        questionParam.answers.includes(q) ? qi.toString() : "").filter((q: any) => q !== ""));

    }
  }, []);

  // This function updates the questions question type and it is rendered in the conditionalQuestionRendering function
  const setQuestionType = (questionToRender: any) => {
    // Update the server question
    dispatch(
      updateQuizQuestion({
        ...questionToRender, choices: [], answers: [],
        type: (document.getElementById(`questionType${question._id}`) as HTMLInputElement)
          .value,
      })
    );
    // Update the local question
    setQuestion({
      ...questionToRender, choices: [], answers: [], 
      type: (document.getElementById(`questionType${question._id}`) as HTMLInputElement).value,
    });
  };

  // THis function checks the questions type and renders the appropriate elements
  const conditionalQuestionRendering = () => {
    if (question.type === "multiple") {
      return (
        <MultipleChoiceEditor
          question={question}
          setQuestion={setQuestion}
          answerArray={arrayCorrectAnswerIndex}
          setAnswerArray={setArrayCorrectAnswerIndex}
        />
      );
    } else if (question.type === "trueFalse") {
      return (
        <TrueFalseEditor
          question={question}
          setQuestion={setQuestion}
          answerArray={arrayCorrectAnswerIndex}
          setAnswerArray={setArrayCorrectAnswerIndex}
        />
      );
    }
    else if (question.type === "fillIn") {
      return (
        <FillInBlank
          question={question}
          setQuestion={setQuestion}
          answerArray={arrayCorrectAnswerIndex}
          setAnswerArray={setArrayCorrectAnswerIndex}
        />
      );
    }
  };

  const updateLocalServerQuestion = async (question: any) => {
    if (arrayCorrectAnswerIndex && question.choices) {
      const newQuestion = {
        ...question, editing: false,
        answers: question.choices.filter((a: any, ai: any) =>
          arrayCorrectAnswerIndex.includes(ai.toString())
        ),
      }
      const status = await client.updateQuizQuestion(qid, newQuestion)
      setQuestion(newQuestion);
      dispatch(
        updateQuizQuestion(newQuestion)
      );
      resetQuestion();
    } else {

      const status = await client.updateQuizQuestion(qid, { ...question, editing: false })
      setQuestion({ ...question, editing: false });
      dispatch(updateQuizQuestion({ ...question, editing: false }));
      resetQuestion();
    }
  };

  const localCancelEditQuizQuestion = (questionToCancel: any) => {
    dispatch(cancelEditQuizQuestion(questionToCancel._id));
    resetQuestion();
  };

  return (
    <div>
      <li className="list-group-item">
        <div>
          <h2>Editing Question</h2>
          <div className="d-flex flex-row">
            <input
              className="form-control me-2"
              value={question.title}
              placeholder="Enter a title here"
              onChange={(e) =>
                setQuestion({ ...question, title: e.target.value })
              }
            ></input>

            <select
              className="form-select me-3"
              id={`questionType${question._id}`}
              onChange={() => setQuestionType(question)}
              value={question.type}
            >
              <option value="multiple">Multiple Choice</option>
              <option value="trueFalse">True False</option>
              <option value="fillIn">Fill in the blank</option>
            </select>

            <div className="align-self-center me-2 ms-5">
              <label htmlFor={`points${question.question_id}`}>Points:</label>
            </div>
            <div>
              <input
                id={`points${question.question_id}`}
                className="form-control"
                value={question.points}
                onChange={(e) =>
                  setQuestion({ ...question, points: e.target.value })
                }
              ></input>
            </div>
          </div>
          <hr />
          Enter your question and answers, and then select the right answer.
          <br />
          <label htmlFor="questionTextAreaID">
            <h4>Question</h4>
          </label>
          <textarea
            id="questionTextAreaID"
            className="form-control"
            rows={7}
            placeholder="Enter a question here"
            value={question.question}
            onChange={(e) =>
              setQuestion({ ...question, question: e.target.value })
            }
          ></textarea>
        </div>
        {conditionalQuestionRendering()}
        <div className="mt-3">
          <button
            id="cancel_edit_quiz"
            className="btn btn-lg btn- me-1 btn-secondary"
            onClick={() => localCancelEditQuizQuestion(question)}
          >
            Cancel
          </button>

          <button
            id="save_edit_quiz"
            className="btn btn-lg btn-danger me-1"
            onClick={() => updateLocalServerQuestion(question)}
          >
            Update
          </button>
        </div>
      </li>
    </div>
  );
}
