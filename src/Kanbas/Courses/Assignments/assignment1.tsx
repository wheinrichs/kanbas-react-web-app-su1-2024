import BsGripVertical from "../Modules/BsGripVertical";
import { PiNotePencil } from "react-icons/pi";
import GripAndPencil from "./GripAndPencil";

export default function Assignment1() {
  return (
    <div className="wd-assignment-list-item row align-items-center">
      <div className="col-auto fs-4">
        <GripAndPencil />
      </div>
      <div className="col">
        <a
          className="wd-assignment-link"
          href="#/Kanbas/Courses/1234/Assignments/123"
        >
          A1 - ENV + HTML
        </a>
        <br />
        Multiple Modules | <strong>Not available until</strong> May 6 at 12:00
        AM | <strong>Due</strong> May 13 at 11:59pm | 100 pts
      </div>
    </div>
  );
}
