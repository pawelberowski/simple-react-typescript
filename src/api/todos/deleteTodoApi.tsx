export function deleteTodo(todoId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
    method: 'DELETE',
  }).catch((error) => {
    console.log('Request failed', error);
  });
}