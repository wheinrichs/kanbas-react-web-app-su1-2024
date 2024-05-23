import { users, enrollments, grades, assignments } from "../../Database";
import { useParams } from "react-router";

export default function GradeTable() {
  const { cid, id } = useParams();
  const courseStudentsIDs = enrollments.filter(
    (student) => student.course === cid
  );
  const courseStudents = users.filter((user) =>
    courseStudentsIDs.find((ID) => ID.user === user._id)
  );
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-3">
          <thead>
            <tr>
              <td>
                <strong>Student Name</strong>
              </td>
              {courseAssignments &&
                courseAssignments.map((assignment) => (
                  <td>
                    {assignment._id} <br />
                    Out of {assignment.points}
                  </td>
                ))}
            </tr>
          </thead>

          <tbody>
            {courseStudents &&
              courseStudents.map((student) => (
                <tr>
                  <td className="text-danger">
                    {student.firstName} {student.lastName}
                  </td>
                  {courseAssignments.map((assignment) => (
                    <td>
                      {
                        grades.find(
                          (grade) =>
                            student._id === grade.student &&
                            grade.assignment === assignment._id
                        )?.grade
                      }
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
