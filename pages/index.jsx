// pages/index.js
import { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos");
      const data = await response.json();
      setTodos(data.data);
    };

    fetchTodos();
  }, []);

  const addTodo = async (todo) => {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: todo, completed: false }),
    });

    const data = await response.json();
    setTodos([...todos, data.data]);
  };

  const removeTodo = async (index) => {
    const todoToRemove = todos[index];
    await fetch(`/api/todos?id=${todoToRemove._id}`, {
      method: "DELETE",
    });

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
