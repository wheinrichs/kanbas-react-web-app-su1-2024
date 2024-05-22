import BsGripVertical from "./BsGripVertical";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { useParams } from "react-router";
import { modules } from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const courseModules = modules.filter((module) => module.course === cid);
  return (
    <div>
      <div className="row mb-4">
        <ModulesControls />
      </div>

      <div className="row">
        <ul id="wd-modules" className="list-group rounded-0">
          {courseModules.map((module) => (
            <li className="wd-module list-group-item p-0 mb-5 ds-5 border-grey">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical />
                {module.name}
                <ModuleControlButtons />
              </div>

              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0 border-start border-3 border-success">
                  {module.lessons.map((lesson) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical />
                      <span className="wd-title">{lesson.name}</span>
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
{
  /* <li className="wd-module list-group-item p-0 mb-5 ds-5 border-grey">
             <div className="wd-title p-3 ps-2 bg-secondary">
               <BsGripVertical />
               Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
               <ModuleControlButtons />
             </div
             <ul className="wd-lessons list-group rounded-0 border-start border-3 border-success">
               <li className="wd-lesson list-group-item p-3 ps-1">
                 <BsGripVertical />
                 <span className="wd-title">LEARNING OBJECTIVES</span>
                 <LessonControlButtons />
               </li
               <li className="wd-content-item list-group-item p-3 ps-3">
                 <BsGripVertical />
                 Introduction to the course
                 <LessonControlButtons />
               </li
               <li className="wd-content-item list-group-item p-3 ps-3">
                 <BsGripVertical />
                 Learn what is Web Development
                 <LessonControlButtons />
               </li
               <li className="wd-lesson list-group-item p-3 ps-1">
                 <BsGripVertical />
                 <span className="wd-title">READING</span>
                 <LessonControlButtons />
               </li
               <li className="wd-content-item list-group-item p-3 ps-3">
                 <BsGripVertical />
                 Full Stack Developer - Chapter 1 - Introduction
                 <LessonControlButtons />
               </li
               <li className="wd-content-item list-group-item p-3 ps-3">
                 <BsGripVertical />
                 Full Stack Developer - Chapter 2 - Creating User Interfaces With
                 HTML
                 <LessonControlButtons />
               </li
               <li className="wd-lesson list-group-item p-3 ps-1">
                 <BsGripVertical />
                 <span className="wd-title">SLIDES</span>
                 <LessonControlButtons />
               </li
               <li className="wd-content-item list-group-item p-3 ps-3">
                 <BsGripVertical />
                 Introduction to Web Development Links to an external site.
                 <LessonControlButtons />
               </li
               <li className="wd-content-item list-group-item p-3 ps-3">
                 <BsGripVertical />
                 Creating an HTTP server with Node.js
                 <LessonControlButtons />
               </li>
             </ul>
           </li
           <li className="wd-module list-group-item p-0 mb-5 ds-5 border-grey">
             <div className="wd-title p-3 ps-2 bg-secondary">
               <BsGripVertical />
               Week 1, Lecture 2 - Formatting User Interfaces with HTML
               <ModuleControlButtons />
             </div
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
         </ul */
}
