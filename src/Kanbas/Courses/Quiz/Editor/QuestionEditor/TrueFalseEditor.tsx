import { useEffect } from "react";

export default function TrueFalseEditor({
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
  const setCorrectAnswer = (e: any, a: any) => {
    setAnswerArray([e.target.value] as any);
  };

  useEffect(() => {
    setQuestion({ ...question, choices: ["true", "false"] });
  }, []);

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
                  id={`${question._id}.${qa}`}
                  className="form-check-input me-2"
                  type="radio"
                  name={question._id}
                  value={qai}
                  checked={answerArray.includes(qai.toString())}
                  onChange={(e) => {
                    setCorrectAnswer(e, qa);
                  }}
                ></input>
                <label htmlFor={`${question._id}.${qa}`}>{qa}</label>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
