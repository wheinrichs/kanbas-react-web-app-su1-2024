import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoCogOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { IoShareSocial } from "react-icons/io5";
import { LiaFileExportSolid } from "react-icons/lia";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0 h-100">
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0"
      >
        <img src="/images/northeastern_logo.png" width="75px" />
      </a>

      <a
        id="wd-account-link"
        href="#/Kanbas/Account"
        className="list-group-item text-white text-center bg-black border-0"
      >
        <FaRegCircleUser className="fs-1 text text-white" /> <br />
        Account
      </a>

      <a
        id="wd-dashboard-link"
        href="#/Kanbas/Dashboard"
        className="list-group-item text-center border-0 bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </a>

      {/* REPLACE THIS WITH THE COURSE LINK IN FUTURE ASSIGNMENTS */}
      <a
        id="wd-course-link"
        href="#/Kanbas/Dashboard"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </a>

      <a
        id="wd-calendar-link"
        href="#/Kanbas/Calendar"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </a>

      <a
        id="wd-inbox-link"
        href="#/Kanbas/Inbox"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </a>

      <a
        id="wd-history-link"
        href="#/Kanbas/History"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <GoClock className="fs-1 text-danger" />
        <br />
        History
      </a>

      <a
        id="wd-studio-link"
        href="#/Kanbas/Studio"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <IoShareSocial className="fs-1 text-danger" />
        <br />
        Studio
      </a>

      <a
        id="wd-commons-link"
        href="#/Kanbas/Commons"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <LiaFileExportSolid className="fs-1 text-danger" />
        <br />
        Commons
      </a>

      <a
        id="wd-help-link"
        href="#/Kanbas/Help"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <IoIosHelpCircleOutline className="fs-1 text-danger" />
        <br />
        Help
      </a>

      <a
        id="wd-labs-link"
        href="#/Labs"
        className="list-group-item text-white bg-black text-center border-0"
      >
        <IoCogOutline className="fs-1 text-danger" />
        <br />
        Labs
      </a>
      
    </div>
  );
}
