import BsGripVertical from "../Modules/BsGripVertical";
import { PiNotePencil } from "react-icons/pi";

export default function GripAndPencil() {
    return (
        <div>
            <span className="me-3"><BsGripVertical /></span>
            <PiNotePencil size = "25" color="green"/>
        </div>
    )
}