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
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 ds-5 border-grey">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical />
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <ModuleControlButtons />
          </div>

          <ul className="wd-lessons list-group rounded-0 border-start border-3 border-success">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <LessonControlButtons />
            </li>

            <li className="wd-content-item list-group-item p-3 ps-3">
              <BsGripVertical />
              Introduction to the course
              <LessonControlButtons />
            </li>

            <li className="wd-content-item list-group-item p-3 ps-3">
              <BsGripVertical />
              Learn what is Web Development
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical />
              <span className="wd-title">READING</span>
              <LessonControlButtons />
            </li>

            <li className="wd-content-item list-group-item p-3 ps-3">
              <BsGripVertical />
              Full Stack Developer - Chapter 1 - Introduction
              <LessonControlButtons />
            </li>

            <li className="wd-content-item list-group-item p-3 ps-3">
              <BsGripVertical />
              Full Stack Developer - Chapter 2 - Creating User Interfaces With
              HTML
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical />
              <span className="wd-title">SLIDES</span>
              <LessonControlButtons />
            </li>

            <li className="wd-content-item list-group-item p-3 ps-3">
              <BsGripVertical />
              Introduction to Web Development Links to an external site.
              <LessonControlButtons />
            </li>

            <li className="wd-content-item list-group-item p-3 ps-3">
              <BsGripVertical />
              Creating an HTTP server with Node.js
              <LessonControlButtons />
            </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 ds-5 border-grey">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical />
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
            <ModuleControlButtons />
          </div>

          <ul className="wd-lessons list-group rounded-0 border-start border-3 border-success">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical />
              <span className="wd-title ">LEARNING OBJECTIVES</span>
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-3">
              <BsGripVertical />
              Learn how to create user interfaces with HTML
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-3">
              <BsGripVertical />
              Deploy the assignment to Netlify
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical />
              <span className="wd-title">READING</span>
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-3">
              <BsGripVertical />
              Full Stack Developer - Chapter 1 - Introduction
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-3">
              <BsGripVertical />
              Full Stack Developer - Chapter 2 - Creating User Interfaces With
              HTML
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical />
              <span className="wd-title">SLIDES</span>
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-3 ">
              <BsGripVertical />
              Introduction to HTML and the DOM
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-3">
              <BsGripVertical />
              Formatting Web content with Headings and Paragraphs
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
