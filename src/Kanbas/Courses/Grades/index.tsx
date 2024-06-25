import { CiImport, CiExport } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";
import GradeTable from "./GradeTable";
import { useParams } from 'react-router-dom';
import { enrollments, users, assignments, grades } from '../../Database';
import { FaFileImport,FaFileExport,FaCog } from 'react-icons/fa';

export default function Grades() {
  return (
    <div>
      <div className="d-flex flex-row justify-content-end">
        <div>
          <button className="btn btn-light rounded-1 border border-grey d-flex align-items-center me-2">
            <CiImport className="fs-5 me-2" />
            Import
          </button>
        </div>

        <div className="dropdown">
          <button
            className="btn btn-light rounded-1 border border-grey d-flex align-items-center me-2 dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            <CiExport className="fs-5 me-2" />
            Export
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>

        <div>
          <button className="btn btn-light rounded-1 border border-grey d-flex align-items-center me-2">
            <FaGear className="fs-4" />
          </button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <strong>Student Names</strong>
        </div>
        <div className="col">
          <strong>Assignment Names</strong>
        </div>
      </div>

      <div className="row d-flex mt-2">
        <div className="col input-group border rounded-2 align-items-center me-2 ps-0 ms-2">
          <label htmlFor="student-name-search">
            <span className="input-group-text bg-white border-0">
              <FaMagnifyingGlass />
            </span>
          </label>
          <input
            type="text"
            id="student-name-search"
            className="form-control border-0"
            placeholder="Search Students"
          />
          <label htmlFor="student-name-search">
            <span className="input-group-text bg-white border-0">
              <RiArrowDropDownLine />
            </span>
          </label>
        </div>
        <div className="col input-group border rounded-2 align-items-center ps-0 ms-2">
          <label htmlFor="assignment-name-search">
            <span className="input-group-text bg-white border-0">
              <FaMagnifyingGlass />
            </span>
          </label>
          <input
            type="text"
            id="assignment-name-search"
            className="form-control border-0"
            placeholder="Search Assignments"
          />
          <label htmlFor="assignment-name-search">
            <span className="input-group-text bg-white border-0">
              <RiArrowDropDownLine />
            </span>
          </label>
        </div>
      </div>

      <div>
        <button className="btn btn-light rounded-1 border border-grey d-flex align-items-center mt-3">
          <CiFilter className="fs-5 me-2" />
          Apply Filters
        </button>
      </div>

      <div>
        <GradeTable />
      </div>
    </div>
  );
}
