import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a id="wd-a" href="#/Labs" className="nav-link">
          Labs
        </a>{" "}
      </li>

      <li className="nav-item">
        <a
          id="wd-a1"
          href="#/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
        >
          Lab 1
        </a>
      </li>

      <li className="nav-item">
        <a
          id="wd-a2"
          href="#/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
        >
          Lab 2
        </a>
      </li>

      <li className="nav-item">
        <a
          id="wd-a3"
          href="#/Labs/Lab3"
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
        >
          Lab 3
        </a>
      </li>

      <li className="nav-item">
        <a
          id="wd-a4"
          href="#/Labs/Lab4"
          className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}
        >
          Lab 4
        </a>
      </li>

      <li className="nav-item">
        <a
          id="wd-a4"
          href="#/Labs/Lab5"
          className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}
        >
          Lab 5
        </a>
      </li>

      <li className="nav-item">
        <a
          id="wd-a4"
          href="#/Labs/Exam"
          className={`nav-link ${pathname.includes("Exam") ? "active" : ""}`}
        >
          Exam
        </a>
      </li>

      <li className="nav-item">
        <a
          id="wd-k"
          href="#/Kanbas"
          className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}
        >
          Kanbas
        </a>
      </li>

      <li className="nav-item">
        <a
          id="wd-github"
          href="https://github.com/wheinrichs/kanbas-react-web-app-su1-2024"
          className={"nav-link"}
        >
          Client GitHub
        </a>
      </li>

      <li className="nav-item">
        <a
          id="wd-github-server"
          href="https://github.com/wheinrichs/kanbas-node-server-app"
          className={"nav-link"}
        >
          Server GitHub
        </a>
      </li>

      <li className="nav-item">
        <a
          id="wd-render"
          href="https://kanbas-node-server-app-0ppt.onrender.com/"
          className={"nav-link"}
        >
          Render Root
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-final-project-landing"
          href="#/Labs/FinalProjectLanding"
          className={`nav-link ${pathname.includes("FinalProjectLanding") ? "active" : ""}`}
        >
          Final Project Landing
        </a>
      </li>
    </ul>
  );
}
