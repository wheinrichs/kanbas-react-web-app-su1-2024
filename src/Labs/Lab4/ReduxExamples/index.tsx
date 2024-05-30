import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/UseStateExample/TodoList";
import TodoListUseState from "./todos/UseStateExample/TodoListUseState";
import TodoListRedux from "./todos/ReduxExample/TodoListRedux";

export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoListUseState />
      <TodoList />
      <TodoListRedux />
    </div>
  );
};
