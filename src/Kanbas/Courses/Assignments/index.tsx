import Assignment1 from "./assignment1";
import Assignment2 from "./assignment2";
import Assignment3 from "./assignment3";
import Assignment4 from "./assignment4";
import Assignment5 from "./assignment5";
import Assignment6 from "./assignment6";
import { FiPlus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import AssignmentTitle from "./AssignmentTitle";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="row mb-4">
        <div className="input-group ms-2 col">
          <span className="input-group-text">
            <CiSearch />
          </span>
          <input type="text" className="form-control" placeholder="Search..." />
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
            className="btn btn-md btn-danger float-end"
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
          <a
            className="wd-assignment-link list-group-item list-group-item-action"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            <Assignment1 />
          </a>

          <a
            className="wd-assignment-link list-group-item list-group-item-action"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            <Assignment2 />
          </a>

          <a
            className="wd-assignment-link list-group-item list-group-item-action"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            <Assignment3 />
          </a>

          <a
            className="wd-assignment-link list-group-item list-group-item-action"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            <Assignment4 />
          </a>

          <a
            className="wd-assignment-link list-group-item list-group-item-action"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            <Assignment5 />
          </a>

          <a
            className="wd-assignment-link list-group-item list-group-item-action"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            <Assignment6 />
          </a>
        </div>
      </ul>
    </div>
  );
}
