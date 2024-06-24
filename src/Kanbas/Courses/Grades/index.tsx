import React from 'react';
import { useParams } from 'react-router-dom';
import { enrollments, users, assignments, grades } from '../../Database';
import { FaFileImport,FaFileExport,FaCog } from 'react-icons/fa';


export default function Grades() {
  const { cid } = useParams();

  // Filter students enrolled in the current course
  const courseStudents = enrollments
    .filter((enrollment) => enrollment.course === cid)
    .map((enrollment) => users.find((user) => user.id === enrollment.user));

  return (
    <div id="wd-grades" className="p-3">
      <div className="row">
        <div className="col">
          <h2>Grades</h2>
        </div>
        <div className="col text-end">
          <button className="btn btn-primary"><FaFileImport className="me-1" />Import</button>
          <button className="btn btn-primary me-2"><FaFileExport className="me-1" />Export</button>
          <button className="btn btn-primary me-2"><FaCog /></button>
        </div>
      </div>
      <div className="row mb-3">
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments
                .filter((assignment) => assignment.course === cid) // Filter assignments by course ID
                .map((assignment) => (
                  <th key={assignment._id}>{assignment.title}<small> (out of 100)</small></th>
                ))}
            </tr>
          </thead>
          <tbody>
            {courseStudents.map((student: any) => (
              <tr key={student.id}>
                <td>{student.firstName} {student.lastName}</td>
                {assignments.map((assignment: any) => {
                  const grade = grades.find((grade: any) => grade.student === student.id && grade.assignment === assignment._id);
                  return <td key={`${student.id}-${assignment._id}`}>{grade ? grade.grade : 'N/A'}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
