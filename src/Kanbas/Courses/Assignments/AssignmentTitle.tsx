import { IoMdArrowDropdown } from "react-icons/io";
import BsGripVertical from "../Modules/BsGripVertical";
import { IoEllipsisVertical } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";


export default function AssignmentTitle() {
  return (
    <div>
      <div className="row align-items-center">
        <div className="align-items-center col-auto">
            <BsGripVertical />
            <IoMdArrowDropdown />
        </div>
        <div className="col align-items-center">
          <h4 id="wd-assignments-title" className="mb-0">
            ASSIGNMENTS
          </h4>
        </div>
        <div className="col-auto border border-light pt-1 pb-1 rounded-pill">
            40% of Total
        </div>
        <div className="col-auto align-items-center fs-4 text-light">
            <FiPlus />
            <IoEllipsisVertical />
        </div>
      </div>
    </div>
  );
}
