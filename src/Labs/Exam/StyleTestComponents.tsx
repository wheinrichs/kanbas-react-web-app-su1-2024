import "./style.css";

export default function StyleTestComponents() {
    return (
        <div>
            <span className = "test_class" id="test_id">Testing</span>
            <style>{`div .blue#white {  color: white; background-color: blue}`}</style>
            <div>
                <h1 className="blue" id="white">Test</h1>
            </div>
        </div>
    )
}