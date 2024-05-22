import EveryoneChip from "./EveryoneChip";
import { useParams } from "react-router";
import { Location } from "react-router";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { cid, id } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === id && assignment.course === cid
  );
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
            />
            <textarea
              id="wd-description"
              cols={45}
              rows={5}
              className="form-control mb-4"
            >
              The assignment is available online Submit a link to the landing
              page of
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
                <input id="wd-points" className="form-control" value={100} />
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
                    value="2024-05-13"
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
                        value="2024-05-06"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="date"
                        className="form-control"
                        id="wd-available-until"
                        min="2024-05-06"
                        value="2024-05-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-end">
              <button className="btn btn-light rounded-1 border border-grey">
                Cancel
              </button>
              <button className="btn btn-danger rounded-1 ms-2">Save</button>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
