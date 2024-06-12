
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul className="w-full max-w-md">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
