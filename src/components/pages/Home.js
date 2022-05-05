import styled from 'styled-components';
import dark_o from '../../assets/dark_o.png';
import dark_k from '../../assets/dark_k.png';
import dark_a from '../../assets/dark_a.png';
import dark_y from '../../assets/dark_y.png';
import light_o from '../../assets/light_o.png';
import light_k from '../../assets/light_k.png';
import light_a from '../../assets/light_a.png';
import light_y from '../../assets/light_y.png';
import { useState } from 'react';

function Home() {
  const [overo, setOvero] = useState(false);
  const [overk, setOverk] = useState(false);
  const [overa, setOvera] = useState(false);
  const [overy, setOvery] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Display>We all know it is coming!</Display>
        <Okay>
          <Letter>
            <img
              src={overo ? light_o : dark_o}
              onMouseOver={() => setOvero(!overo)}
              onMouseOut={() => setOvero(!overo)}
              alt="O"
            />
          </Letter>
          <Letter>
            <img
              src={overk ? light_k : dark_k}
              onMouseOver={() => setOverk(!overk)}
              onMouseOut={() => setOverk(!overk)}
              alt="K"
            />
          </Letter>
          <Letter>
            <img
              src={overa ? light_a : dark_a}
              onMouseOver={() => setOvera(!overa)}
              onMouseOut={() => setOvera(!overa)}
              alt="a"
            />
          </Letter>
          <Letter>
            <img
              src={overy ? light_y : dark_y}
              onMouseOver={() => setOvery(!overy)}
              onMouseOut={() => setOvery(!overy)}
              alt="y"
            />
          </Letter>
        </Okay>
      </Container>
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  background-color: ${props => props.theme.dColor};
`;

const Display = styled.div`
  color: ${props => props.theme.bColor};
  font-size: ${props => props.theme.fontlg};
  text-align: center;
`;

const Container = styled.div`
  width: 50%;
  padding: 2rem auto;
  margin: 0 auto;
`;

const Okay = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 40%;
  margin: 1rem auto;
`;

const Letter = styled.div`
  transform: skew(-10deg);
`;

const Footer = styled.footer``;

export default Home;
