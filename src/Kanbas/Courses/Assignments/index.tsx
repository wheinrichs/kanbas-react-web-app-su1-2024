import Assignment1 from "./assignment1";
import Assignment2 from "./assignment2";
import Assignment3 from "./assignment3";
import Assignment4 from "./assignment4";
import Assignment5 from "./assignment5";
import Assignment6 from "./assignment6";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <Assignment1 />
        <Assignment2 />
        <Assignment3 />
        <Assignment4 />
        <Assignment5 />
        <Assignment6 />
      </ul>
    </div>
  );
}
