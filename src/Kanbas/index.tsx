import { Route, Routes, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import DropdownIndex from "./Navigation/DropdownIndex";
import DropdownIndexCourse from "./Courses/Navigation/DropdownIndexCourse";
import * as client from "./Courses/client";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Account from "./Account";
import Session from "./Account/Session";
import { PiCursorText } from "react-icons/pi";
import ProtectedRoute from "./ProtectedRoute";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    image: "reactjs.jpeg",
  });

  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kanbas" className="h-100">
          {/* <h1>Kanbas</h1> */}
          <div className="d-flex flex-row h-100">
            <div className="d-none d-md-block bg-black">
              <KanbasNavigation />
            </div>
            <div className="flex-fill p-4 overflow-auto">
              <div className="d-block d-md-none">
                <DropdownIndex />
              </div>
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route
                  path="Dashboard"
                  element={<ProtectedRoute>
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                    /></ProtectedRoute>
                  }
                />
                <Route
                  path="Courses/:cid/*"
                  element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>}
                />
                <Route path="/Account/*" element={<Account />} />
              </Routes>
            </div>
          </div>
        </div>
      </Session>
    </Provider>
  );
}
