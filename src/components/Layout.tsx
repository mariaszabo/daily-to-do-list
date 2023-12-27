import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <Background>
        <Card>
          <ContentContainer>
            {props.children}
          </ContentContainer>
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

  max-width: 1000px;
  max-height: 570px;
  overflow: scroll;   /* ca sa arate mai bine cand sunt mai multe task-uri  */
  width: 100%;
  
  display: flex;
  flex-direction: column; 
  
  
  align-items: center;
  align-items: left;

  padding: 42px 20px 42px 20px;

  
  border-radius: 32px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);


`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px; /* o cutiuta in cutie */
  text-align: left; /* Aliniere la stânga */
`;