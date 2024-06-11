import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { updateQuizQuestion } from "../../reducer";

export default function MultipleChoiceEditor( { question, setQuestion } : { question: any, setQuestion: (question: any) => void }) {
  const dispatch = useDispatch();
  const { cid, qid } = useParams();

  const { quiz_questions, quizzes } = useSelector(
    (state: any) => state.quizReducer
  );

  // const [question, setQuestion] = useState({
  //   ...quiz_questions.find((q: any) => q.question_id === question.question_id),
  // });

  const addNewAnswer = () => {
    let newChoices = [];
    if (question.choices) {
      console.log("on second");

      newChoices = [...question.choices, ""];
    } else {
      newChoices = [""];
    }
    setQuestion({ ...question, choices: newChoices });
  };

  const updateAnswer = (answer_index: any, choice: any) => {
    setQuestion({
      ...question,
      choices: question.choices.map((a: any, ai: any) =>
        ai === answer_index ? choice : a
      ),
    });
  };

  const toggleCorrectAnswer = (answer: any) => {
    if (question.answers === undefined) {
      setQuestion({
        ...question,
        answers: [answer],
      });
    } else if (question.answers.includes(answer)) {

      setQuestion({
        ...question,
        answers: question.answers.filter((i: any) => i !== answer),
      });

    } else {
      setQuestion({
        ...question,
        answers: [...question.answers, answer],
      });
    }
  };

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
                  className="form-check-input me-2"
                  type="checkbox"

                  checked={question.answers && question.answers.includes(qa)}                  
                  onChange={() => {
                    toggleCorrectAnswer(qa);
                  }}
                ></input>

                {/* THERE IS AN ISSUE WHERE AFTER YOU TYPE THE CHECKMARK COMES UNDONE */}
                <input
                  className="form-control"
                  onChange={(e) => {
                    updateAnswer(qai, e.target.value);
                  }}
                  value={qa}
                ></input>
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
