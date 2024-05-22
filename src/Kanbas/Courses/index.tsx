import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import DropdownIndexCourse from "./Navigation/DropdownIndexCourse";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { courses } from "../Database";


export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <br />
      <div className="d-block d-md-none">
        <h3>Course Navigation</h3>
        <DropdownIndexCourse />
      </div>
      <div className="d-flex flex-row">
        <RxDragHandleHorizontal className="fs-1 me-2" />
        <h2>{course && course.name} &gt; {pathname.split("/")[4]}</h2>
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
