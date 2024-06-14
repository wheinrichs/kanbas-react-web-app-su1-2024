import { useDispatch } from "react-redux";
import { cancelEditQuizQuestion, updateQuizQuestion } from "../../reducer";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import { useParams } from "react-router";
import { useState } from "react";


export default function EditorSingleQuestion(questionParam: any) {
  const dispatch = useDispatch();
  const { cid, qid } = useParams();

  const [question, setQuestion] = useState({...questionParam});


  // This function updates the questions question type and it is rendered in the conditionalQuestionRendering function
  const setQuestionType = (questionToRender: any) => {
    dispatch(
      updateQuizQuestion({
        ...questionToRender,
        type: (document.getElementById("questionType") as HTMLInputElement)
          .value,
      })
    );
  };

  // THis function checks the questions type and renders the appropriate elements
  const conditionalQuestionRendering = () => {
    if (question.type === "multiple") {

      return (
        <MultipleChoiceEditor question={question} setQuestion = {setQuestion} />
      );
    } else if (question.type === "trueFalse") {
      return;
    }
  };

  const updateLocalServerQuestion = (question: any) => {
    dispatch(updateQuizQuestion({ ...question, editing: false }));
  };

  return (
    <div>
      <li className="list-group-item">
        <div>
          <h2>Editing Question</h2>
          <div className="d-flex flex-row">
            <input className="form-control me-2" value={question.title} placeholder="Enter a title here" onChange={(e) => setQuestion({...question, title: e.target.value})}></input>

            <select
              className="form-select me-3"
              id="questionType"
              onChange={() => setQuestionType(question)}
            >
              <option defaultValue="multiple">Multiple Choice</option>
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
                onChange={(e) => setQuestion({...question, points: e.target.value})}
              ></input>
            </div>
          </div>
          <hr />
          Enter your question and answers, and then select the right answer.<br />
          <label htmlFor="questionTextAreaID"><h4>Question</h4></label>
          
          <textarea id="questionTextAreaID" className="form-control" rows={7} placeholder="Enter a question here" value={question.question} onChange={(e) => setQuestion({...question, question: e.target.value})}></textarea>
        </div>
        {conditionalQuestionRendering()}
        <div className="mt-3">
          <button
            id="cancel_edit_quiz"
            className="btn btn-lg btn- me-1 btn-secondary"
            onClick={() => dispatch(cancelEditQuizQuestion(question.question_id))}
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
