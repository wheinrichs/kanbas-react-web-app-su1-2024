import BsGripVertical from "./BsGripVertical";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { useParams } from "react-router";
import * as db from "../../Database";
import { useState } from "react";

export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");
  const addModule = () => {
    setModules([
      ...modules,
      {
        _id: new Date().getTime().toString(),
        name: moduleName,
        course: cid,
        lessons: [],
      },
    ]);
    setModuleName("");
  };

  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };
  const editModule = (moduleId: string) => {
    setModules(
      modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m))
    );
  };
  const updateModule = (module: any) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };

  return (
    <div>
      <div className="row mb-4">
        <ModulesControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={addModule}
        />
      </div>

      <div className="row">
        <ul id="wd-modules" className="list-group rounded-0">
          {modules
            .filter((module) => module.course === cid)
            .map((module: any) => (
              <li className="wd-module list-group-item p-0 mb-5 ds-5 border-grey">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical />
                  {!module.editing && module.name}
                  {module.editing && (
                    <input
                      className="form-control w-50 d-inline-block"
                      onChange={(e) =>
                        updateModule({ ...module, name: e.target.value })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          updateModule({ ...module, editing: false });
                        }
                      }}
                      value={module.name}
                    />
                  )}
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={deleteModule}
                    editModule={editModule}
                  />
                </div>

                {module.lessons && (
                  <ul className="wd-lessons list-group rounded-0 border-start border-3 border-success">
                    {module.lessons.map((lesson: any) => (
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
