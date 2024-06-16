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
    if (e.target.checked) {
      setAnswerArray([...answerArray, e.target.value] as any);
    } else {
      setAnswerArray(
        answerArray.filter((ans: any) => ans !== e.target.value) as any
      );
    }
  };

  useEffect(() => {
    console.log("using effect");
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
                  className="form-check-input me-2"
                  type="checkbox"
                  value={qai}
                  checked={answerArray.includes(qai.toString())}
                  onChange={(e) => {
                    setCorrectAnswer(e, qa);
                  }}
                ></input>
                {qa}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
