import { useLocation, useNavigate, useParams } from "react-router";
import * as client from "./client"
import { useEffect, useState } from "react";

export default function EditorQuizDetails() {
    const { cid, id } = useParams();
    const [quiz, setQuiz] = useState({});

    const fetchCurrentQuiz = async () => {
        const newFetchedQuiz = await client.fetchQuiz(id);
        setQuiz(newFetchedQuiz);
      }
    
      useEffect(() => {
        fetchCurrentQuiz();
      }, []);
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