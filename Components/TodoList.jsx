import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul className="w-full max-w-md">
      {todos.map((todo, index) => {
        const key = todo._id || index.toString(); 
        return (
          <TodoItem
            key={key}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
