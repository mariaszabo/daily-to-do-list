import {useState, useEffect} from 'react';

import styled from 'styled-components';

type Props = {
  onSubmit: (name: string) => void;
}

const TodoForm = (props: Props) => {
  const [name, setName] = useState(''); // aici retinem ce scriem in input
  
  const submitForm = () => {
    props.onSubmit(name) // --> apeleaza functia onSubmit din props
    setName(''); //--> face sa dispara textul din input
  }
//chestie utila
  // useEffect (
  //   () => {
  //     console.log('Hello')
  //   }, [name]
  // )
  
  return ( 
    /*facem o functie direct in input*/
    <Container>
      <Content>
        <Input placeholder = "Add new list item" value={name} onChange = {e => setName(e.target.value)} />
        <Button onClick = {submitForm} >Add</Button>
      </Content> 
    </Container>
  )
}
  
export default TodoForm;

const Container = styled.div`
  width: 600px;
  height: 58px;
  flex-shrink: 0;
  display: flex;
  margin-top: 32px;
`;

const Input = styled.input`
  width: 600px;
  height: 58px;
  flex-shrink: 0;
  fill: var(--FFFFFF, #FFF);
  stroke-width: 1px;
  stroke: #EEE;
  border: 1px solid var(--stroke, #EEE);
  border-radius: 4px;
  
  font-feature-settings: 'liga' off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 17.6px */
  letter-spacing: 0.16px;

`;

const Content = styled.span`
  display: flex;
  flex-direction: row;
`;


const Button = styled.button`
  width: 84px;
  heigth: 44px;
  display: inline-flex;
  padding: 12px 24px 12px 24px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid var(--Mavi, #2D70FD);
  background: #2D70FD;

  color: #FFF;
  text-align: center;
  font-feature-settings: 'liga' off;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 19.8px */
  letter-spacing: 0.18px;
`;
