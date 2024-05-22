import { Route, Routes, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import DropdownIndex from "./Navigation/DropdownIndex";
import DropdownIndexCourse from "./Courses/Navigation/DropdownIndexCourse";

export default function Kanbas() {
  return (
    <div id="wd-kanbas" className="h-100">
      {/* <h1>Kanbas</h1> */}
      <div className="d-flex h-100">
        <div className="d-none d-md-block bg-black">
          <KanbasNavigation />
        </div>
        <div className="flex-fill p-4">
          <div className="d-block d-md-none">
            <DropdownIndex />
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:cid/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
