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
import readRoadmap from '../../assets/readmap.png';

function Home() {
  const [overo, setOvero] = useState(false);
  const [overk, setOverk] = useState(false);
  const [overa, setOvera] = useState(false);
  const [overy, setOvery] = useState(false);

  const [display, setDisplay] = useState('');

  // Mouse over

  const OverO = () => {
    setOvero(!overo);
    setDisplay('No body ever changed');
  };
  const OverK = () => {
    setOverk(!overk);
    setDisplay('The world by doing');
  };
  const OverA = () => {
    setOvera(!overa);
    setDisplay('What everyone else');
  };
  const OverY = () => {
    setOvery(!overy);
    setDisplay('Was doing');
  };

  // Mouse Out

  const OutO = () => {
    setOvero(!overo);
    setDisplay('');
  };
  const OutK = () => {
    setOverk(!overk);
    setDisplay('');
  };
  const OutA = () => {
    setOvera(!overa);
    setDisplay('');
  };
  const OutY = () => {
    setOvery(!overy);
    setDisplay('');
  };

  return (
    <Wrapper>
      <Container>
        <Display>
          <span>-</span>
          {display}
          <span>-</span>
        </Display>
        <Okay>
          <Letter>
            <img
              src={overo ? light_o : dark_o}
              onMouseOver={OverO}
              onMouseOut={OutO}
              alt="O"
            />
          </Letter>
          <Letter>
            <img
              src={overk ? light_k : dark_k}
              onMouseOver={OverK}
              onMouseOut={OutK}
              alt="K"
            />
          </Letter>
          <Letter>
            <img
              src={overa ? light_a : dark_a}
              onMouseOver={OverA}
              onMouseOut={OutA}
              alt="a"
            />
          </Letter>
          <Letter>
            <img
              src={overy ? light_y : dark_y}
              onMouseOver={OverY}
              onMouseOut={OutY}
              alt="y"
            />
          </Letter>
        </Okay>
      </Container>
      <Footer>
        <div>
          © {new Date().getFullYear()}, Okay Degens <br /> All right reserved.
        </div>
        <div>
          <img src={readRoadmap} alt="read roadmap" />
        </div>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  background-color: ${props => props.theme.dColor};

  position: relative;
`;

const Display = styled.div`
  color: ${props => props.theme.bColor};
  font-size: ${props => props.theme.fontlg};
  text-align: center;

  span {
    color: transparent;
  }
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
  transform: skew(-7deg);
`;

const Footer = styled.footer`
  width: 85vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${props => props.theme.bColor};
  font-size: ${props => props.theme.fontlg};
  margin: auto;
  margin-top: 5rem;

  img {
    border-radius: 6rem;
  }
`;

export default Home;
