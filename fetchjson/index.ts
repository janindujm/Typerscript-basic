import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

interface Todo {
    userId: number;
    id: number;
    title: string;
    body: string;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id
  const title = todo.title
  const userId = todo.userId

  console.log(`
    The title is: '${title}'
    The id is: '${id}'

    `);

}).catch((error) => {
  console.error('Error fetching data:', error);
});