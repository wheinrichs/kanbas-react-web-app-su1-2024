import { FiPlus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import AssignmentTitle from "./AssignmentTitle";
import { useParams } from "react-router";
import GripAndPencil from "./GripAndPencil";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { deleteAssignment, setAssignments } from "./reducer";
import * as client from "./client";
import { useEffect } from "react";

export default function Assignments() {
  const { cid } = useParams();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  }
  useEffect(() => {
    fetchAssignments();
  }, []);

  const deleteAssignmentServerClient = async (aid: any) => {
    await client.deleteAssignment(aid);
    dispatch(deleteAssignment(aid));
  }
    
  let new_assignmnet_id;
  let delete_assignment_id: string;
  const createAssignmentID = () => {
    new_assignmnet_id = new Date().getTime().toString();
    return null;
  };

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
          <div>{createAssignmentID()}</div>
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments/${new_assignmnet_id}`}
            key={`/Kanbas/Courses/${cid}/Assignments/${new_assignmnet_id}`}
          >
            <button
              id="wd-add-assignment"
              className="btn btn-md btn-danger float-end ms-1 me-1"
              type="button"
            >
              <FiPlus className="fs-5 me-1 mb-1" />
              Assignment
            </button>
          </Link>

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
          {assignments &&
            assignments.map((assignment: any) => (
              <Link
                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                key={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                className="wd-assignment-link list-group-item list-group-item-action"
              >
                <div className="list-group-item list-group-item-action border-0">
                  <div className="wd-assignment-list-item row align-items-center">
                    <div className="col-auto fs-4 ps-0">
                      <GripAndPencil />
                    </div>
                    <div className="col">
                      <h5>
                        <strong>{assignment.title}</strong>
                      </h5>
                      <span className="text-danger">Multiple Modules </span>|{" "}
                      <strong>Not available until</strong>{" "}
                      {new Date(assignment.available_date).toLocaleDateString()}{" "}
                      {new Date(assignment.available_date).toLocaleTimeString()}{" "}
                      | <strong>Due</strong>{" "}
                      {new Date(assignment.due_date).toLocaleDateString()}{" "}
                      {new Date(assignment.due_date).toLocaleTimeString()} |{" "}
                      {assignment.points} pts
                    </div>
                    <div className="col-auto pe-0">
                      <FaTrash
                        className="text-danger me-2 fs-4"
                        data-bs-toggle="modal"
                        data-bs-target="#wd-delete-assignment-dialog"
                        onClick={(e) => {
                          e.preventDefault();
                          {
                            delete_assignment_id = assignment._id;
                          }
                        }}
                      />
                      <AssignmentControlButtons />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </ul>
      
      <div
        id="wd-delete-assignment-dialog"
        className="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Confirm Delete? </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this assignment?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel{" "}
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-danger"
                onClick={() => {

                  deleteAssignmentServerClient(delete_assignment_id);
                }}
              >
                Delete{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
