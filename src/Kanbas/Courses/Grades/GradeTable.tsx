export default function GradeTable() {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-3">
          <thead>
            <tr>
              <td>
                <strong>Student Name</strong>
              </td>
              <td>
                A1 SETUP <br />
                Out of 100
              </td>
              <td>
                A2 HTML
                <br /> Out of 100
              </td>
              <td>
                A3 CSS
                <br /> Out of 100
              </td>
              <td>
                A4 BOOTSTRAP
                <br /> Out of 100
              </td>
            </tr>
          </thead>

          <tbody>
            <tr>
                <td className="text-danger">
                    Sam Smith
                </td>
                <td>
                    <input type = "text" value = "98%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "13%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "54%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "33%" className="form-control border-0 bg-transparent"/>
                </td>
            </tr>
            <tr>
                <td className="text-danger">
                    Jane Austin
                </td>
                <td>
                    <input type = "text" value = "98%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "13%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "54%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "33%" className="form-control border-0 bg-transparent"/>
                </td>
            </tr>
            <tr>
                <td className="text-danger">
                    Winston Heinrichs
                </td>
                <td>
                    <input type = "text" value = "98%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "13%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "54%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "33%" className="form-control border-0 bg-transparent"/>
                </td>
            </tr>
            <tr>
                <td className="text-danger">
                    Lexie Kremp
                </td>
                <td>
                    <input type = "text" value = "98%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "13%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "54%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "33%" className="form-control border-0 bg-transparent"/>
                </td>
            </tr>
            <tr>
                <td className="text-danger">
                    James Grey
                </td>
                <td>
                    <input type = "text" value = "98%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "13%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "54%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "33%" className="form-control border-0 bg-transparent"/>
                </td>
            </tr>
            <tr>
                <td className="text-danger">
                    Sarah Peak
                </td>
                <td>
                    <input type = "text" value = "98%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "13%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "54%" className="form-control border-0 bg-transparent"/>
                </td>
                <td>
                    <input type = "text" value = "33%" className="form-control border-0 bg-transparent"/>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
