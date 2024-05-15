export default function StylingSliders() {
  return (
    <div id="wd-css-styling-range-and-sliders">
      <h3>Range</h3>
      <label htmlFor="range1" className="form-label">
        Example range
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="5"
        step="0.5"
        id="range1"
      />
    </div>
  );
}
