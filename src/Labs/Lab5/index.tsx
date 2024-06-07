import PathParameters from "./PathParameters";
import EnvironmentVariables from "./EnvironmentVariables";
import QueryParameters from "./QueryParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsModule from "./WorkingWithObjectsModule";
import WorkingWithArrays from "./WorkingWithArrays";
import HttpClient from "./HttpClient";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;


export default function Lab5() {
    return (
      <div id="wd-lab5">
        <h2>Lab 5</h2>
        <div className="list-group">
          <a href={`${REMOTE_SERVER}/lab5/welcome`}         
             className="list-group-item">
             Welcome
          </a>
        </div><hr/>
        <EnvironmentVariables />
        <PathParameters />
        <QueryParameters />
        <WorkingWithObjects />
        <WorkingWithObjectsModule />
        <WorkingWithArrays />
        <HttpClient />
        <WorkingWithObjectsAsynchronously />
        <WorkingWithArraysAsynchronously />
      </div>
    );
  }
  