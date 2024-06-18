import { useLocation, useNavigate, useParams } from "react-router";
import * as client from "./client"
import { useEffect, useState } from "react";

export default function EditorQuizDetails() {
    const { cid, qid } = useParams();
    const [quiz, setQuiz] = useState({});

    const fetchCurrentQuiz = async () => {
        console.log(qid);
        const newFetchedQuiz = await client.fetchQuiz(qid);
        setQuiz(newFetchedQuiz);
      }
    
    //   useEffect(() => {
    //     fetchCurrentQuiz();
    //   }, []);
console.log(qid);
    return(
        <div>
            <div className = "container">
                <div className = "row">
                    <input className="form-control">

                    </input>
                </div>
            </div>
        </div>
    )
}