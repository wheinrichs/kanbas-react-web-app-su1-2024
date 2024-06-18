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

  const addNewAnswer = (index: any) => {
    let newChoices = [];
    let subChoices = [];
    // Adding a sub choice
    if (question.choices && index < question.choices.length) {

      subChoices = [...question.choices[index], ""];
      newChoices = [...question.choices];
      newChoices[index] = subChoices;
    } 
    // Adding a new choice at the end
    else if (question.choices) {
      subChoices = [""];
      newChoices = [...question.choices, subChoices];
    } 
    // Adding the first choice
    else {

      newChoices = [[""]];
    }
    setQuestion({ ...question, choices: newChoices });
    setAnswerArray(newChoices.map((a: any, ai: any) => ai.toString()));
  };

  const updateAnswer = (answer_index: any, subAnswerIndex: any, data: any) => {
    let subQuestionList = [...question.choices[answer_index]]
    subQuestionList[subAnswerIndex] = data;
    setQuestion({
      ...question,
      choices: question.choices.map((a: any, ai: any) =>
        ai === answer_index ? subQuestionList : a
      ),
    });
  };

  const removeAnswerOption = (choice: any, choice_index: any) => {
    // If you remove an answer from the list and it shifts all the indexes the answer array is wrong
    if(answerArray.includes(choice_index.toString())) {
      const tempAnswers = question.choices.filter((choice: any, choiceIndex: any) => answerArray.includes(choiceIndex.toString()));
      const tempAnswerArray = [] as any;
      let newChoices = [];
      newChoices = question.choices.filter((q: any) => q !== choice);
      setQuestion({ ...question, choices: newChoices });

      for(let i = 0; i < newChoices.length; i++) {
        if(tempAnswers.includes(newChoices[i])){
          tempAnswerArray.push(i.toString());
        }
      }
      setAnswerArray(tempAnswerArray);
    }
    else{
      let newChoices = [];
      newChoices = question.choices.filter((q: any) => q !== choice);
      setQuestion({ ...question, choices: newChoices });
    }
  }

  return (
    <div>
      <h3>Answers:</h3>
      <h6>Check all correct choices</h6>
      <ul className="list-group">
        {question.choices &&
          question.choices.map((qa: any, qai: any) => (
            <li className="list-group-item">
              {question.choices[qai].map((qas: any, qasi: any) => (
              <div className="d-flex align-items-center">
                <input
                  className="form-control mb-2"
                  onChange={(e) => {
                    updateAnswer(qai, qasi, e.target.value);
                  }}
                  value={qas}
                ></input>
              </div>
              ))}
              <div className="d-flex align-items-center">
                <button
                  className="btn border border-black text-danger m-2"
                  onClick={() => {
                    addNewAnswer(qai);
                  }}
                >
                  + Add Alternate Answer
                </button>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => {
                    removeAnswerOption(qa, qai);
                  }}
                >
                  Delete Answer
                </button>
              </div>
            </li>
          ))}
        {question.choices && (
          <button
            className="text-danger"
            onClick={() => {
              addNewAnswer(question.choices.length);
            }}
          >
            + Add Another choice
          </button>
        )}
        {!question.choices && (
          <button
            className="text-danger"
            onClick={() => {
              addNewAnswer(0);
            }}
          >
            + Add Another choice
          </button>
        )}
      </ul>
    </div>
  );
}
