export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={45} rows={20}>
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label>Online Entry Options</label>
            <br />
            <input type="checkbox" name="entry-type" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />

            <input type="checkbox" name="entry-type" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />

            <input type="checkbox" name="entry-type" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />

            <input
              type="checkbox"
              name="entry-type"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />

            <input type="checkbox" name="entry-type" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
            <br />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to"> Assign to</label> <br />
            <input
              id="wd-assign-to"
              placeholder="Who to assign to"
              title="who to assign to"
              value="Everyone"
            />
            <br />
            <br />
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input
              type="date"
              id="wd-due-date"
              min="2024-05-10"
              value="2024-05-13"
            ></input>
            <br />
            <br />
            <table>
              <tr>
                <td align="left" valign="top">
                  <label htmlFor="wd-available-from">Available from</label>
                </td>
                <td>
                  <label htmlFor="wd-available-until">Until</label>
                </td>
              </tr>
              <tr>
                <td align="left" valign="top">
                  <input
                    type="date"
                    id="wd-available-from"
                    value="2024-05-06"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    id="wd-available-until"
                    min="2024-05-06"
                    value="2024-05-20"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    
      <hr />
      <table width="100%">
        <tr>
          <td align="right" valign="top">
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
        <br />
      </table>
    </div>
  );
}
