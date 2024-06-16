
import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");

 const handleSubmit = (e) => {
   e.preventDefault();
   if (input.trim()) {
     addTodo({ text: input, completed: false });
     setInput("");
   }
 };


  return (
    <form onSubmit={handleSubmit} className="flex mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
