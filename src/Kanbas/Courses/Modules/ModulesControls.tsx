import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { TiCancel } from "react-icons/ti";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">


      <button
        id="wd-add-module-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>


      <div className="dropdown d-inline me-1 float-end">
        <button
          id="wd-publish-all-btn"
          className="btn btn-lg btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <GreenCheckmark />
          Publish All
        </button>
        <div className="dropdown-menu">
            <a
              id="wd-publish-all-modules-and-items-btn"
              className="dropdown-item"
              href="#"
            >
              <GreenCheckmark />
              Publish all modules and items
            </a>

            <a
              id="wd-publish-modules-only-button"
              className="dropdown-item"
              href="#"
            >
              <GreenCheckmark />
              Publish modules only
            </a>

            <a
              id="wd-unpublish-all-modules-and-items"
              className="dropdown-item"
              href="#"
            >
              <TiCancel className="fs-4" />
              Unpublish all modules and item
            </a>

            <a
              id="wd-unpublish-modules-only"
              className="dropdown-item"
              href="#"
            >
              <TiCancel className="fs-4" />
              Unpublish modules only
            </a>
        </div>
      </div>

      <button
        id="wd-view-progress"
        className="btn btn-lg btn- me-1 float-end btn-secondary"
      >
        View Progress
      </button>

      <button
        id="wd-add-module-btn"
        className="btn btn-lg me-1 float-end btn-secondary"
      >
        Collapse All
      </button>

    </div>
  );
}
