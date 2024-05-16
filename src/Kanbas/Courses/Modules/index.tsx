import BsGripVertical from "./BsGripVertical";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 ds-5 gorder-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical />
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <LessonControlButtons />
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical />

              <span className="wd-title">READING</span>
              <LessonControlButtons />

              <ul className="wd-content">
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 1 - Introduction
                </li>
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 2 - Creating User Interfaces
                  With HTML
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical />

              <span className="wd-title">SLIDES</span>
              <LessonControlButtons />

              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to Web Development Links to an external site.
                </li>
                <li className="wd-content-item">
                  Creating an HTTP server with Node.js
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 ds-5 gorder-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical />
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical />
              <span className="wd-title ">LEARNING OBJECTIVES</span>
              <LessonControlButtons />
              <ul className="wd-content">
                <li className="wd-content-item">
                  Learn how to create user interfaces with HTML
                </li>
                <li className="wd-content-item">
                  Deploy the assignment to Netlify
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical />

              <span className="wd-title">READING</span>
              <LessonControlButtons />

              <ul className="wd-content">
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 1 - Introduction
                </li>
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 2 - Creating User Interfaces
                  With HTML
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical />

              <span className="wd-title">SLIDES</span>
              <LessonControlButtons />

              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to HTML and the DOM
                </li>
                <li className="wd-content-item">
                  Formatting Web content with Headings and Paragraphs
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
