import "./index.css";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People"
  ];
  const { pathname } = useLocation();
  const { cid } = useParams();
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 me-4 rounded-0">
      {links.map((link) => (
        <Link
          key={`/Kanbas/Courses/${cid}/${link}`}
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
