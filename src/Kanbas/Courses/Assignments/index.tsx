import Assignment1 from "./assignment1";
import Assignment2 from "./assignment2";
import Assignment3 from "./assignment3";
import Assignment4 from "./assignment4";
import Assignment5 from "./assignment5";
import Assignment6 from "./assignment6";
import { FiPlus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import AssignmentTitle from "./AssignmentTitle";
import { useParams } from "react-router";
import { assignments } from "../../Database";
import GripAndPencil from "./GripAndPencil";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );


  return (
    <div id="wd-assignments">
      <div className="row mb-4">
        <div className="input-group ms-2 col border rounded-3">
          <label
            htmlFor="assignment-search"
            className="input-group-text border-0 bg-transparent"
          >
            <CiSearch />
          </label>
          <input
            type="text"
            className="form-control border-0"
            id="assignment-search"
            placeholder="Search..."
          />
        </div>
        <div className="col-auto">
          <button
            id="wd-add-assignment"
            className="btn btn-md btn-danger float-end ms-1 me-1"
            type="button"
          >
            <FiPlus className="fs-5 me-1 mb-1" />
            Assignment
          </button>

          <button
            id="wd-add-assignment-group"
            className="btn btn-md btn-secondary float-end"
            type="button"
          >
            <FiPlus className="fs-5 me-1 mb-1" />
            Group
          </button>
        </div>
      </div>

      <ul className="list-group rounded-0 border-0 border-grey">
        <li className="list-group-item bg-secondary p-3">
          <AssignmentTitle />
        </li>
        <div
          id="wd-assignment-list"
          className="list-group rounded-0 assignment-list"
        >
          {courseAssignments &&
            courseAssignments.map((assignment) => (
              <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} key={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                className="wd-assignment-link list-group-item list-group-item-action"
              >
                <div className="list-group-item list-group-item-action border-0">
                  <div className="wd-assignment-list-item row align-items-center">
                    <div className="col-auto fs-4 ps-0">
                      <GripAndPencil />
                    </div>
                    <div className="col">
                      <h5>
                        <strong>{assignment._id}</strong>
                      </h5>
                      <span className="text-danger">Multiple Modules </span>|{" "}
                      <strong>Not available until</strong> {new Date(assignment.available_date).toUTCString()} |{" "}
                      <strong>Due</strong> {new Date(assignment.due_date).toUTCString()} | {assignment.points} pts
                    </div>
                    <div className="col-auto pe-0">
                      <LessonControlButtons />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </ul>
    </div>
  );
}
