import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul className="w-full max-w-md">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo} 
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
