import { FiPlus } from "react-icons/fi";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
    return (
      <div className="float-end">
        <GreenCheckmark />
        <FiPlus className="fs-4" />
        <IoEllipsisVertical className="fs-4" />

      </div>
  );}