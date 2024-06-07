import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjectsModule() {
    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module",
        description: "Create a NodeJS server with ExpressJS",
        course: "CS5610",
      });
      const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/module`

  return (
    <div id="wd-working-with-objects">
      <h3>Module Object</h3>
      <h4>Modifying Module Properties</h4>
      <a id="wd-update-module-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/name/${module.name}`}>
        Update Module Title
      </a>

      <input className="form-control w-75" id="wd-module-title"
        value={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })}/>
      <hr />


      <h4>Retrieving Module Object</h4>
      <a id="wd-retrieve-module" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>


      <h4>Retrieving Module Properties</h4>
      <a id="wd-retrieve-module-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Title
      </a><hr/>
      
    </div>
);}
