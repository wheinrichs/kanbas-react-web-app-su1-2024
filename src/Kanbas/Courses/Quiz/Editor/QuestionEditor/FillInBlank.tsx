import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { updateQuizQuestion } from "../../reducer";

export default function FillInBlank({
  question,
  setQuestion,
  answerArray,
  setAnswerArray,
}: {
  question: any;
  setQuestion: (question: any) => void;
  answerArray: any;
  setAnswerArray: (answeArrayr: any) => void;
}) {

  const addNewAnswer = () => {
    let newChoices = [];
    if (question.choices) {
      newChoices = [...question.choices, ""];
    } else {
      newChoices = [""];
    }
    console.log("New CHoice: ", newChoices);
    setQuestion({ ...question, choices: newChoices });
    setAnswerArray(newChoices.map((a: any, ai: any) => ai.toString()))
  };

  const addNewAlternateAnswer = () => {

  };

  const updateAnswer = (answer_index: any, choice: any) => {
    setQuestion({
      ...question,
      choices: question.choices.map((a: any, ai: any) =>
        ai === answer_index ? choice : a
      ),
    });
  };

  console.log("choice array is: ", question.choices);
  console.log("answer array is: ", answerArray);
  console.log("question answer array is: ", question.answers);


  return (
    <div>
      <h3>Answers:</h3>
      <h6>Check all correct choices</h6>
      <ul className="list-group">
        {question.choices &&
          question.choices.map((qa: any, qai: any) => (
            <li className="list-group-item">
              <div className="d-flex align-items-center">
                <input
                  className="form-control"
                  onChange={(e) => {
                    updateAnswer(qai, e.target.value);
                  }}
                  value={qa}
                ></input>
              </div>
              <div className="align-items-center">
                <button className="text-danger m-2" onClick={addNewAlternateAnswer}>
                  + Add Alternate Answer
                </button>
              </div>
            </li>
          ))}
        <button className="text-danger" onClick={addNewAnswer}>
          + Add Another choice
        </button>
      </ul>
    </div>
  );
}
