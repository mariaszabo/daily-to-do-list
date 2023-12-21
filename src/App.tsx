import {useState} from 'react';

import styled from 'styled-components';
import Layout from './components/Layout';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoCount from './components/TodoCount';

import 'normalize.css';
// tipurile de date pe care le are un to-do  //
type ToDo = {
  id: number;
  name: string;
  complete: boolean;
  createdAt: Date;
}

export default function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);//aici tinem minte todo-urile
  console.log('todos', todos) //afiseaza in consola

  // functia care creeaza un todo cu onSubmit din TodoForm
  const createTodo = (name: string) => {
   const newTodo = {
     id: Date.now(), // returneaza un numar
     name: name, 
     complete: false,
     createdAt: new Date()
   };
    setTodos([...todos, newTodo]); //face o lista continua de todos cu valorile salvate anterior//
  }


  const completeTodo = (id: number) => { //functia pt a bifa o sarcina indeplinita
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) return; // daca indexul exista ne oprim

    const newTodos = [...todos]; // creeaza un vector identic cu cel vechi, util cand bifam o sarcina
    const todo  = newTodos[index];
    todo.complete = !todo.complete;
    setTodos(newTodos); // salvam lista noua
  }  

  const clearAllTasks = () => {
    setTodos([]); // actualizează starea 'todos' cu un array gol
  };

  
  return (
    <Layout>
      <Title>Daily To Do List</Title>
      <TodoForm onSubmit = {createTodo} />
      <TodoList todos = {todos} onClick = {completeTodo} />
      <TodoCount todos = {todos} clearAll = {clearAllTasks} />
    </Layout>
  )
}

const Title = styled.span`
  color: #11175E;
  font-family: Rubik;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
`;
