// pages/index.js
import { useState } from "react";
import TodoList from "../Components/TodoList";
import TodoInput from "../components/TodoInput";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}
