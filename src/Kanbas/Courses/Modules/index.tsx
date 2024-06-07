import BsGripVertical from "./BsGripVertical";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";


export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const createModule = async (module: any) => {
    const newModule = await client.createModule(cid as string, module);
    dispatch(addModule(newModule));
  };

  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const saveModule = async (module: any) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  return (
    <div>
      <div className="row mb-4">
        <ModulesControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={() => {
            createModule({ name: moduleName, course: cid });
            setModuleName("");
          }}
        />
      </div>

      <div className="row">
        <ul id="wd-modules" className="list-group rounded-0">
          {modules
            .filter((module: any) => module.course === cid)
            .map((module: any) => (
              <li className="wd-module list-group-item p-0 mb-5 ds-5 border-grey">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical />
                  {!module.editing && module.name}
                  {module.editing && (
                    <input
                      className="form-control w-50 d-inline-block"
                      onChange={(e) =>saveModule({ ...module, name: e.target.value })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveModule({ ...module, editing: false });
                        }
                      }}
                      value={module.name}
                    />
                  )}
                  <ModuleControlButtons
                     moduleId={module._id}
                     deleteModule={(moduleId) => {
                       removeModule(moduleId);
                     }}
                     editModule={(moduleId) => dispatch(editModule(moduleId))}
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
