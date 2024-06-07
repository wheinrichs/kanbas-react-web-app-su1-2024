import EveryoneChip from "./EveryoneChip";
import { useParams } from "react-router";
import { Location } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as client from "./client";

import { addAssignment } from "./reducer";

function formatDate(date: Date) {
  // Get the year, month, and day from the Date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");

  // Construct the string in yyyy-mm-dd format
  return `${year}-${month}-${day}`;
}

export default function AssignmentEditor() {
  const { cid, id } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  // Sets the assignment = to a new assignment if the ID isn't in the list otherwise sets it to the current assignment
  const [assignment, assignmentSet] = useState(
    assignments.find(
      (assignment: any) => assignment._id === id && assignment.course === cid
    )
      ? assignments.find(
          (assignment: any) =>
            assignment._id === id && assignment.course === cid
        )
      : {
          _id: id,
          title: "",
          course: cid,
          points: "",
          available_date: "",
          due_date: "",
          description: "",
        }
  );

  const addServerAndLocalAssignment = async (assignment: any) => {
    const serverCreatedAssignment = assignments.find(
      (a: any) => a._id === id && a.course === cid
    )
      ? await client.updateAssignment(id as string, assignment)
      : await client.addAssignment(cid as string, assignment);
    dispatch(addAssignment(assignment));
  };

  return (
    <div id="wd-assignments-editor" className="ms-1">
      {assignment && (
        <div>
          <div>
            <label htmlFor="wd-name" className="form-label">
              Assignment Name
            </label>
            <input
              id="wd-name"
              value={assignment.title}
              className="form-control mb-3"
              onChange={(e) =>
                assignmentSet({ ...assignment, title: e.target.value })
              }
            />
            <textarea
              id="wd-description"
              cols={45}
              rows={5}
              className="form-control mb-4"
              onChange={(e) =>
                assignmentSet({ ...assignment, description: e.target.value })
              }
            >
              {assignment.description}
            </textarea>
          </div>

          <div>
            <div className="row form-group align-items-center mb-4">
              <div className="col-3">
                <label
                  htmlFor="wd-points"
                  className="float-end form-label mb-0"
                >
                  Points
                </label>
              </div>
              <div className="col">
                <input
                  id="wd-points"
                  className="form-control"
                  value={assignment.points}
                  onChange={(e) =>
                    assignmentSet({ ...assignment, points: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="row form-group align-items-center mb-4">
              <div className="col-3">
                <label htmlFor="wd-group" className="float-end form-label mb-0">
                  Assignment Group
                </label>
              </div>
              <div className="col">
                <select id="wd-group" className="form-select">
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
              </div>
            </div>

            <div className="row form-group align-items-center mb-4">
              <div className="col-3">
                <label
                  htmlFor="wd-display-grade-as"
                  className="float-end form-label mb-0"
                >
                  Display Grade as
                </label>
              </div>
              <div className="col">
                <select id="wd-display-grade-as" className="form-select">
                  <option value="Percentage">Percentage</option>
                </select>
              </div>
            </div>

            <div className="row form-group mb-4">
              <div className="col-3">
                <label
                  htmlFor="wd-submission-type"
                  className="float-end form-label mb-0 mt-3"
                >
                  Submission Type
                </label>
              </div>

              <div className="col border rounded-1 ms-3">
                <div className="m-2 mt-3 mb-3">
                  <select id="wd-submission-type" className="form-select">
                    <option value="Online">Online</option>
                  </select>
                </div>

                <div className="row form-group mb-4 ms-1">
                  <label>
                    <strong>Online Entry Options</strong>
                  </label>
                  <div className="ms-1 mt-2">
                    <div className="form-check mb-2">
                      <input
                        type="checkbox"
                        name="entry-type"
                        id="wd-text-entry"
                        className="form-check-input"
                      />
                      <label
                        htmlFor="wd-text-entry"
                        className="form-check-label"
                      >
                        Text Entry
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        type="checkbox"
                        name="entry-type"
                        id="wd-website-url"
                        className="form-check-input"
                      />
                      <label
                        htmlFor="wd-website-url"
                        className="form-check-label"
                      >
                        Website URL
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        type="checkbox"
                        name="entry-type"
                        id="wd-media-recordings"
                        className="form-check-input"
                      />
                      <label
                        htmlFor="wd-media-recordings"
                        className="form-check-label"
                      >
                        Media recordings
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        type="checkbox"
                        name="entry-type"
                        id="wd-student-annotation"
                        className="form-check-input"
                      />
                      <label
                        htmlFor="wd-student-annotation"
                        className="form-check-label"
                      >
                        Student Annotation
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        type="checkbox"
                        name="entry-type"
                        id="wd-file-upload"
                        className="form-check-input"
                      />
                      <label
                        htmlFor="wd-file-upload"
                        className="form-check-label"
                      >
                        File Uploads
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row form-group mb-4">
              <div className="col-3">
                <label
                  htmlFor="wd-assign-to"
                  className="float-end form-label mb-0 mt-3"
                >
                  Assign
                </label>
              </div>

              <div className="col border rounded-1 ms-3">
                <div>
                  <label htmlFor="wd-assign-to" className="form-label mt-2">
                    <strong>Assign to</strong>
                  </label>{" "}
                  <div className="border p-2 rounded-1">
                    <EveryoneChip />
                  </div>
                  <label htmlFor="wd-due-date" className="form-label">
                    <strong>Due</strong>
                  </label>
                  <input
                    type="date"
                    className="form-control mb-2"
                    id="wd-due-date"
                    min="2024-05-10"
                    value={formatDate(new Date(assignment.due_date))}
                    onChange={(e) =>
                      assignmentSet({ ...assignment, due_date: e.target.value })
                    }
                  ></input>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="wd-available-from">
                        <strong>Available from</strong>
                      </label>
                    </div>
                    <div className="col">
                      <label htmlFor="wd-available-until">
                        <strong>Until</strong>
                      </label>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <input
                        type="date"
                        className="form-control"
                        id="wd-available-from"
                        value={formatDate(new Date(assignment.available_date))}
                        onChange={(e) =>
                          assignmentSet({
                            ...assignment,
                            available_date: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                    <div className="col">
                      <input
                        type="date"
                        className="form-control"
                        id="wd-available-until"
                        min="2024-05-06"
                        value={formatDate(new Date(assignment.available_until))}
                        onChange={(e) =>
                          assignmentSet({
                            ...assignment,
                            available_until: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-end">
              <Link
                key={`/Kanbas/Courses/${cid}/Assignments`}
                to={`/Kanbas/Courses/${cid}/Assignments`}
                className={`btn btn-light rounded-1 border border-grey border`}
              >
                Cancel
              </Link>
              <Link
                key={`/Kanbas/Courses/${cid}/Assignments`}
                to={`/Kanbas/Courses/${cid}/Assignments`}
                className={`btn btn-danger rounded-1 ms-2`}
                onClick={() => {
                  addServerAndLocalAssignment(assignment);
                }}
              >
                Save
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
