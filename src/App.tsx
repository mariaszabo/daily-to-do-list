import {useState} from 'react';

import Layout from './components/Layout';
import TodoForm from './components/TodoForm';

import 'normalize.css';



type ToDo = {
  name: string;
  complete: boolean;
  createdAt: Date;
}

export default function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  console.log('todos', todos)

  const createTodo = (name: string) => {
   const newTodo = {
     name: name, 
     complete: false,
     createdAt: new Date()
   };
    setTodos([...todos, newTodo]); //face o lista continua de todo//
  }
  
  return (
    <Layout>
      Daily To Do List
      <TodoForm onSubmit={createTodo} />
    </Layout>
  )
}