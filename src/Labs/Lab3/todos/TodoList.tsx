import React from 'react';
import TodoItem from "./TodoItem";
import todosData from "./todos.json";

const TodoList = () => {
  const todos = todosData as any[]; // Type assertion

  return (
    <>
      <h3>Todo List</h3>
      <ul className="list-group">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
    </>
  );
}

export default TodoList;
