import {useState} from 'react';

import styled from 'styled-components';

type ToDo = {
  id: number;
  name: string;
  complete: boolean;
  createdAt: Date;
}

type Props = {
  //aici are rolul de a afisa ce s-a creat
  todos: ToDo[];
}

const TodoList: React.FC<Props> = ({todos}) => {

  const [clicked, setClicked] = useState<number>(null);

  const listItems = (id:number) => {
    setClicked(id);
  }
  
  return (
    <Container>
      {todos.map(todo => ( //se utilizează 'map' pentru a parcurge fiecare element din lista "todos" și pentru a afișa un element "Idea", pentru fiecare element din listă
      
        <Idea
          key = {todo.id} // fiecarui nou element i se atribuie un id unic
          onClick = {() => listItems(todo.id)}//se definește un eveniment "onClick", care apelează funcția 'listItems', setând id-ul elementului curent ca fiind clicked.
          //se apelează funcția 'listItems' atunci când un element 'Idea' este selectat
        >
          <Elipse>
            < circle
              cx="16" cy="16" r="15.5" 
              stroke = {clicked === todo.id ? '#00D8A7' : '#EEE'}
              fill = {clicked === todo.id ? '#00D8A7' : '#none'}
            />
            {clicked === todo.id && ( // Verifică dacă elementul este bifat pentru a adăuga săgeata mică
              <path 
                d= "M2.66666 8.66667L5.99999 12L13.3333 4.66667"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              />
            )}
    {/* d --> descrierea traseului         */}
          </Elipse>
          <Text 
            text-decoration-line = {clicked === todo.id ? 'line-through' : 'none'}
          >
            {todo.name}
          </Text>
        </Idea>
      ))}
    </Container>
  )
}

export default TodoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  margin-left: 20px;
  gap: 38px;
`;


const Elipse = styled.svg`
  width: 32px;
  height: 32px;
  
  stroke-width: 1px;
  stroke: #EEE;
  fill: none;

  alignt-items: center;

  /* &:hover {
    stroke: #2D70FD26;
  } */
`;

// const Arrow = styled.svg`
//   width: 16px;
//   height: 16px;
//   flex-shrink: 0;
//   stroke="white";
//   stroke-width="2"; 
//   stroke-linecap="round";
//   stroke-linejoin="round";
//   align-items: center;
// `;


const Text = styled.span`
  color: #001747;
  font-feature-settings: 'liga' off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 17.6px */
  letter-spacing: 0.16px;

  
`;

const Idea = styled.span`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  cursor: pointer; /* Adăugarea cursorului pentru a indica interacțiunea cu elementul */

  &:hover ${Text} {
    color: #2D70FD;
  }

  &:hover ${Elipse} {
    fill: #2D70FD26;
    /* stroke: #2D70FD; */ 
    /* --> !!! ***** ??? */
  }
  
`;