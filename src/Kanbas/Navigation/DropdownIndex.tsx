import { AiOutlineDashboard } from "react-icons/ai";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import {
  IoCalendarOutline,
  IoCogOutline,
  IoShareSocial,
} from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { LiaBookSolid, LiaFileExportSolid } from "react-icons/lia";

export default function DropdownIndex() {
  return (
    <div className="mb-2">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div>
          <img src="images/canvas-logo.png" width="200px" />
        </div>
        <button type="button" className="bg-transparent border-0">
          <MdOutlineCancel className="fs-3"/>
        </button>
      </div>
      <div className="list-group">
        <a
          id="wd-account-link"
          href="#/Kanbas/Account"
          className="list-group-item text-danger border-0"
        >
          <FaRegCircleUser className="fs-3 text text-danger me-2" />
          Account
        </a>

        <a
          id="wd-dashboard-link"
          href="#/Kanbas/Dashboard"
          className="list-group-item border-0 text-danger"
        >
          <AiOutlineDashboard className="fs-3 text-danger me-2" />
          Dashboard
        </a>

        {/* REPLACE THIS WITH THE COURSE LINK IN FUTURE ASSIGNMENTS */}
        <a
          id="wd-course-link"
          href="#/Kanbas/Dashboard"
          className="list-group-item text-danger
                    border-0"
        >
          <LiaBookSolid className="fs-3 text-danger me-2" />
          Courses
        </a>

        <a
          id="wd-calendar-link"
          href="#/Kanbas/Calendar"
          className="list-group-item text-danger   border-0"
        >
          <IoCalendarOutline className="fs-3 text-danger me-2" />
          Calendar
        </a>

        <a
          id="wd-inbox-link"
          href="#/Kanbas/Inbox"
          className="list-group-item text-danger   border-0"
        >
          <FaInbox className="fs-3 text-danger me-2" />
          Inbox
        </a>

        <a
          id="wd-history-link"
          href="#/Kanbas/History"
          className="list-group-item text-danger   border-0"
        >
          <GoClock className="fs-3 text-danger me-2" />
          History
        </a>

        <a
          id="wd-studio-link"
          href="#/Kanbas/Studio"
          className="list-group-item text-danger   border-0"
        >
          <IoShareSocial className="fs-3 text-danger me-2" />
          Studio
        </a>

        <a
          id="wd-commons-link"
          href="#/Kanbas/Commons"
          className="list-group-item text-danger   border-0"
        >
          <LiaFileExportSolid className="fs-3 text-danger me-2" />
          Commons
        </a>

        <a
          id="wd-help-link"
          href="#/Kanbas/Help"
          className="list-group-item text-danger   border-0"
        >
          <IoIosHelpCircleOutline className="fs-3 text-danger me-2" />
          Help
        </a>

        <a
          id="wd-labs-link"
          href="#/Labs"
          className="list-group-item text-danger   border-0"
        >
          <IoCogOutline className="fs-3 text-danger me-2" />
          Labs
        </a>
      </div>
    </div>
  );
}
