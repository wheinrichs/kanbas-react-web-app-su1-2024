import React from "react";
import Kanbas from "./Kanbas"
import Labs from "./Labs";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="h-100">
        <h1>Welcome to Web Dev</h1>

        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
