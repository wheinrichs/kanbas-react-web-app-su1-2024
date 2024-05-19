import BsGripVertical from "../Modules/BsGripVertical";
import { PiNotePencil } from "react-icons/pi";
import GripAndPencil from "./GripAndPencil";
import "../Modules/LessonControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignment1() {
  return (
    <div className="list-group-item list-group-item-action border-0">
      <div className="wd-assignment-list-item row align-items-center">
        <div className="col-auto fs-4 ps-0">
          <GripAndPencil />
        </div>
        <div className="col">
          <h5>
            <strong>A1</strong>
          </h5>
          <span className="text-danger">Multiple Modules </span>|{" "}
          <strong>Not available until</strong> May 6 at 12:00 AM |{" "}
          <strong>Due</strong> May 13 at 11:59pm | 100 pts
        </div>
        <div className="col-auto pe-0">
          <LessonControlButtons />
        </div>
      </div>
    </div>
  );
}
