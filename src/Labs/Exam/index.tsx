import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import StyleTestComponents from "./StyleTestComponents"
import React, { useState } from "react";


export default function Exam() {
  const q = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ul>
      {q.map((s) => (
        <li className={"fw-bold"}>
          2 x {s} = {2 * s}
        </li>
      ))}
    </ul>
  );
}

// export default function Exam() {
//     const handleClick = (parameter = "Hello") => {
//         console.log(parameter)
//       }

//     return (
//         <div>
//         <h1>Exam</h1>
//         {/* <StyleTestComponents />
//         <button onClick={()=>handleClick()}>Hello</button> */}
//         {


//         </div>
//     )
// }