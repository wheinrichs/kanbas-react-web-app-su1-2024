import Assignment1 from "./assignment1";
import Assignment2 from "./assignment2";
import Assignment3 from "./assignment3";
import Assignment4 from "./assignment4";
import Assignment5 from "./assignment5";
import Assignment6 from "./assignment6";
import { FiPlus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";


export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="row">
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

      <ul className="list-group rounded-0">
        <li className="list-item bg-secondary">
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        </li>
        <ul id="wd-assignment-list" className="list-group rounded-0 assignment-list">
          <li className="list-group-item">
            <Assignment1 />
          </li>

          <li className="list-group-item">
          <Assignment2 />
          </li>

          <li className="list-group-item">
          <Assignment3 />
          </li>

          <li className="list-group-item">
          <Assignment4 />
          </li>

          <li className="list-group-item">
          <Assignment5 />
          </li>

          <li className="list-group-item">
          <Assignment6 />
          </li>
        </ul>
      </ul>
    </div>
  );
}
