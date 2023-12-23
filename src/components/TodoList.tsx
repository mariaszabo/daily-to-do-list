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
  onClick: (id: number) => void;
}


const TodoList = (props: Props ) => {

  // const [clicked, setClicked] = useState<number>();

  const listItems = (id:number) => {
    props.onClick(id);
  }

  const sortTodo = props.todos.sort((a, b) => {
    // Sortare după proprietatea 'completed' în ordine descrescătoare (mai întâi necompletate)
    if (a.complete !== b.complete) {
      return a.complete ? 1 : -1; // Necompletate înainte de completate
    } 
    else {
      // Dacă 'completed' este același, sortează după 'createdAt' în ordine crescătoare
      return a.createdAt.getTime() - b.createdAt.getTime();
    }
  });
  
  return (
    <Container>
      { sortTodo.map(todo => ( //se utilizează 'map' pentru a parcurge fiecare element din lista "todos" și pentru a afișa un element "Idea", pentru fiecare element din listă
      
        <Idea
          key = {todo.id} // fiecarui nou element i se atribuie un id unic
          onClick = {() => listItems(todo.id)}//se definește un eveniment "onClick", care apelează funcția 'listItems', setând id-ul elementului curent ca fiind clicked.
          //se apelează funcția 'listItems' atunci când un element 'Idea' este selectat
        >
          <Elipse>
            < circle
              cx="16" cy="16" r="15.5" 
              stroke = {todo.complete ? '#00D8A7' : '#EEE'}
              fill = {todo.complete ? '#00D8A7' : '#none'}
            />
            {todo.complete === true && ( // Verifică dacă elementul este bifat pentru a adăuga săgeata mică
              <path
                //d="M10 20L12.5 17L20 8" --> nu
                d="M10.6 16.6L13.9 19L21.3 12.6"
                ///d="M8 12L16 24L24 12" --> nu
                //d="M10 14L15 20L25 9" --> X
                //d = "M2.6 8.6L5.9 12L13.3 4.6" --> X
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
            crossed = {todo.complete} //se apeleaza funcția 'crossed' pentru
            text-decoration-line = {todo.complete ? 'line-through' : 'none'}
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
  color: ${(props) => props.crossed ? '#8F98A8' : 'none'};
  font-feature-settings: 'liga' off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 17.6px */
  letter-spacing: 0.16px;
  
  text-decoration: ${props => props.crossed ? 'line-through' : 'none'};
  text-decoration-color: ${props => props.crossed ? '#8F98A8' : '#EEE'};
  
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

  /* &:hover ${Elipse} {
    /* fill: #2D70FD26; */
    stroke: #2D70FD !important;  
    /* --> !!! ***** ??? */
  } */
  
`;