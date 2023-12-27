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
  clearAll: () => void;
}

const TodoCount = (props: Props) => {

  // const getCompletedTasksMessage = () => {
  //   if (props.todos.length === 0) {
  //     return ' tasks completed';
  //   } else if (props.todos.length === 1) {
  //     return ' task completed';
  //   } else {
  //     return ' tasks completed';
  //   }
  // };
  
  return (
    <Container>
      <Line />
      <Row>
        <Tasks>
          {props.todos.reduce((count, todo) => todo.complete ? count + 1 : count, 0)} task completed
        </Tasks>
          {/* if (props.todos.length === 0)
            return 'No tasks completed';
           else if (props.todos.length === 1) {
            return '1 task completed';
          } else {
            return '${props.todos.length} tasks completed';
          }
 */}
          {/* {getCompletedTasksMessage(props.todos)}; */}
        <Clear onClick = {props.clearAll}>Clear All</Clear>
      </Row>
    </Container>
  )
}

export default TodoCount;

const Container = styled.div`
  max-width: 600px;
  width: 100%; 
  height: 42px;
  margin-top: 32px;
`;

const Line = styled.div`
  max-width: 600px;
  height: 1px;
  background: #EEE;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 24px;
  justify-content: space-between; /* isi ia cat spatiu are nevoie */
`;

const Tasks = styled.span`
  color: #B1BACB;
  font-feature-settings: 'liga' off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 17.6px */
  letter-spacing: 0.16px;
  margin-left: 20px;
`;

const Clear = styled.span`
  color: #B1BACB;
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;  
  font-weight: 500;
  line-height: 110%; /* 17.6px */
  letter-spacing: 0.16px;
  cursor: pointer;
`;