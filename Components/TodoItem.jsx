const TodoItem = ({ todo, removeTodo }) => {
  return (
    <li className="flex items-center justify-between p-4 mb-2 bg-white rounded-md shadow-md">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => removeTodo(todo)}
        className="mr-4"
      />
      <span
        className={`flex-1 ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text} 
      </span>
      <button
        onClick={() => removeTodo(todo)}
        className="ml-4 text-red-500 hover:text-red-600"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
