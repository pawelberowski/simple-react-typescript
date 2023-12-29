import { CreateTodo, Todo } from '../../types/Todo.tsx';

export async function CreateTodo(newTodo: CreateTodo): Promise<Todo> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'content-type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error();
  }
  return response.json();
}
