import { Navigate, Route, Routes } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import DropdownIndexCourse from "./Navigation/DropdownIndexCourse";
import { RxDragHandleHorizontal } from "react-icons/rx";

export default function Courses() {
  return (
    <div id="wd-courses">
      <br />
      <div className="d-block d-md-none">
        <h3>Course Navigation</h3>
        <DropdownIndexCourse />
      </div>
      <div className="d-flex flex-row">
        <RxDragHandleHorizontal className="fs-1 me-2" />
        <h2>Course 1234</h2>
      </div>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>

        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
