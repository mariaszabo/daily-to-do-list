import {useState} from 'react';

import styled from 'styled-components';

const TodoCount = () => {
  return (
    <Container>
      <Line />
      <Row>
        <Tasks>1 task completed</Tasks>
        <Clear>Clear All</Clear>
      </Row>
    </Container>
  )
}

export default TodoCount;

const Container = styled.div`
  width: 600px;
  height: 42px;
  margin-top: 32px;
`;

const Line = styled.div`
  width: 600px;
  height: 1px;
  background: #EEE;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 24px;
  gap: 360px;
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
`;