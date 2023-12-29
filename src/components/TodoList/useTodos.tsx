import { useEffect, useState } from 'react';
import { Todo } from '../../types/Todo.tsx';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error('Error fetching todos', error);
      });
  }, [todos]);

  return {
    todos,
    setTodos,
  };
};
