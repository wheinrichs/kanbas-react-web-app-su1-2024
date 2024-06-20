import { useEffect, useState } from "react";
import * as client from "./client";

export default function SampleInteractQuizGrade() {
  const [allGrades, setAllGrades] = useState([]);
  const newGrade = {
    userID: "1231244",
    quizID: "123123",
    grade: 90,
  };
  const addGrade = async (grade: any) => {
    await client.writeQuizGrade(grade);
  };

  const fetchGrades = async () => {
    const fetchedAllGrades = await client.getAllQuizGrades();
    setAllGrades(fetchedAllGrades);
  };

  useEffect(() => {
    fetchGrades();
  }, []);
  return (
    <div>
      <button className="btn btn-danger" onClick={() => addGrade(newGrade)}>
        + Grade
      </button>
      <ul>
        {allGrades && allGrades.map((grade: any) => 
        <li>{JSON.stringify(grade)}</li>
      )}</ul>
    </div>
  );
}
