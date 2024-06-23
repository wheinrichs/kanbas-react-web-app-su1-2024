import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import Exam from "./Exam";

import { Provider } from "react-redux";
import store from "./store";
import FinalProjectLanding from "./FinalProjectLanding";

export default function Labs() {
  return (
    <Provider store={store}>
      <div id="wd-labs">
        <h1>Labs</h1>
        <h3>Winston Heinrichs</h3>
        <h4>Summer 1 2024</h4>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="/Lab1" element={<Lab1 />} />
          <Route path="/Lab2" element={<Lab2 />} />
          <Route path="/Lab3/*" element={<Lab3 />} />
          <Route path="/Lab4/*" element={<Lab4 />} />
          <Route path="/Lab5/*" element={<Lab5 />} />
          <Route path="/FinalProjectLanding/*" element={<FinalProjectLanding />} />
          <Route path="/Exam/*" element={<Exam />} /> 
        </Routes>
      </div>
    </Provider>
  );
}
