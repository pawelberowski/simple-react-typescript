import { useTodos } from './useTodos.tsx';

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <div>
      <h2>Todos List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            <br />
            {todo.completed ? 'Completed' : 'Not completed'}
          </li>
        ))}
      </ul>
    </div>
  );
};
