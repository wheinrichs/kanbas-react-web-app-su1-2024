import { useSelector } from "react-redux";
import TodoItemRedux from "./TodoItemRedux";
import TodoFormRedux from "./TodoFormRedux";
export default function TodoListRedux() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List Redux</h2>
      <ul className="list-group">
        <TodoFormRedux />
        {todos.map((todo: any) => (
          <TodoItemRedux todo={todo} />
        ))}
      </ul>
      <hr/>
    </div>
  );
}
