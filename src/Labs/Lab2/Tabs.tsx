export default function Tabs() {
  return (
    <div id="wd-css-navigating-with-tabs">
      <h2>Tabs</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Labs/Lab2">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Labs/Lab2">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#/Labs/Lab2">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}
