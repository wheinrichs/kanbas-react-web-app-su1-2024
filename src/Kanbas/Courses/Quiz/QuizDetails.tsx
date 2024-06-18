import { useLocation, useNavigate, useParams } from "react-router";
import * as client from "./client"
import { useEffect, useState } from "react";


export default function QuizDetails() {
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
        <h1>
            Quiz Details Screen Goes Here
        </h1>
    )
}