import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <Background>
      <Card>
        <Content>
        {props.children}
        </Content>
      </Card>
    </Background>
  )
}

export default Layout;

const Background = styled.div`
  background: #F5F9FF;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  heiht: 100%;
  max-width: 1000px;
  max-height: 670px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
  border-radius: 32px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Content = styled.div`
  padding: 42px 20px 42px 20px;
`;