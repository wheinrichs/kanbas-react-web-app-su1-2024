import LessonControlButtons from "../Modules/LessonControlButtons";
import GripAndPencil from "./GripAndPencil";

export default function Assignment4() {
  return (
    <div className="list-group-item list-group-item-action border-0">
      <div className="wd-assignment-list-item row align-items-center">
        <div className="col-auto fs-4 ps-0">
          <GripAndPencil />
        </div>
        <div className="col">
          <h5>
            <strong>A4</strong>
          </h5>
          <span className="text-danger">Multiple Modules </span>|{" "}
          <strong>Not available until</strong> May 27 at 12:00 AM |{" "}
          <strong>Due</strong> June 3 at 11:59pm | 100 pts
        </div>
        <div className="col-auto pe-0">
          <LessonControlButtons />
        </div>
      </div>
    </div>
  );
}
