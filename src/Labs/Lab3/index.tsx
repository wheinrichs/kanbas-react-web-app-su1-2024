import "./index.css";
export default function Lab3() {
    return (
        <div>
            <h2>Lab 3</h2>
            <h1 id="asd" className="zxc">I'm white on red</h1>

            <div><input type="checkbox" name="radio"/>DSA</div>
{/* <title><label type="htmlFor" name="radio"/>FDS</title>
<title><label type="htmlFor" name="radio"/>GFD</title>  */}
<label htmlFor="last">Last name</label>
<input
//   value="Brown"
  placeholder="Lee"
  id="last"
  title="Type your last name"/>
        </div>
    );
}