import StyleTestComponents from "./StyleTestComponents"

export default function Exam() {
    const handleClick = (parameter = "Hello") => {
        console.log(parameter)
      }
    return (
        <div>
        <h1>Exam</h1>
        <StyleTestComponents />
        <button onClick={()=>handleClick()}>
  Hello
</button>
        </div>
    )
}