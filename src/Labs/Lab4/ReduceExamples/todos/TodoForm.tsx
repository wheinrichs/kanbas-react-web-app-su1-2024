import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(){
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
      <li className="list-group-item">
        <button onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click" className="btn btn-success text-white mr-2"> Add </button>
        <button onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click" className="btn btn-warning text-dark mr-2" > Update </button>
        <input value={todo.title}
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
      </li>
    );
  }