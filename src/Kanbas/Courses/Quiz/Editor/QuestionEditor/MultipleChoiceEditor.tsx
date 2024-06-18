import { FaTrash } from "react-icons/fa";


export default function MultipleChoiceEditor({
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

  const setCorrectAnswer = (e: any, a: any) => {
    if (e.target.checked) {
      setAnswerArray([...answerArray, e.target.value] as any);
    } else {
      setAnswerArray(
        answerArray.filter((ans: any) => ans !== e.target.value) as any
      );
    }
  };

  const removeAnswerOption = (choice: any, choice_index: any) => {
    if(answerArray.includes(choice_index.toString())) {
      setAnswerArray(
        answerArray.filter((ans: any) => ans !== choice_index.toString()) as any
      );
    }
    let newChoices = [];
    newChoices = question.choices.filter((q: any) => q !== choice);
    setQuestion({ ...question, choices: newChoices });
  }

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
                  onClick={(e) => {
                    setCorrectAnswer(e, qa);
                  }}
                ></input>

                <input
                  className="form-control"
                  onChange={(e) => {
                    updateAnswer(qai, e.target.value);
                  }}
                  value={qa}
                ></input>
                <FaTrash className="ms-2" onClick={() => removeAnswerOption(qa, qai)}></FaTrash>
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
