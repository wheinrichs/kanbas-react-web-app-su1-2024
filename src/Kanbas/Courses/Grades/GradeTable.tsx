import { users, enrollments, grades, assignments } from "../../Database";
import { useParams } from "react-router";

export default function GradeTable() {
  const { cid, id } = useParams();
  const courseStudentsIDs = enrollments.filter(
    (student) => student.course === cid
  );

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  const courseStudents = enrollments
    .filter((enrollment) => enrollment.course === cid)
    .map((enrollment) => users.find((user) => user._id === enrollment.user));

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments
                .filter((assignment) => assignment.course === cid) // Filter assignments by course ID
                .map((assignment) => (
                  <th key={assignment._id}>
                    {assignment.title}
                    <small> (out of 100)</small>
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {courseStudents.map((student: any) => (
              <tr key={student.id}>
                <td>
                  {student.firstName} {student.lastName}
                </td>
                {assignments.map((assignment: any) => {
                  const grade = grades.find(
                    (grade: any) =>
                      grade.student === student.id &&
                      grade.assignment === assignment._id
                  );
                  return (
                    <td key={`${student.id}-${assignment._id}`}>
                      {grade ? grade.grade : "N/A"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
