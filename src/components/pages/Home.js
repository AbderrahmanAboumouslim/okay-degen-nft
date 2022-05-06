import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  const mq = window.matchMedia('(max-width: 990px)').matches;

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

          {mq ? null : (
            <Letter>
              <img
                src={overa ? light_a : dark_a}
                onMouseOver={OverA}
                onMouseOut={OutA}
                alt="a"
              />
            </Letter>
          )}

          {mq ? null : (
            <Letter>
              <img
                src={overy ? light_y : dark_y}
                onMouseOver={OverY}
                onMouseOut={OutY}
                alt="y"
              />
            </Letter>
          )}
        </Okay>
      </Container>
      <Footer>
        <div style={{ textAlign: 'center' }}>
          © {new Date().getFullYear()}, Okay Degens <br /> All right reserved.
        </div>

        <Readmap>
          <span>Read roadmap {'==>'}</span>
          <Link to="roadmap">
            <img src={readRoadmap} alt="read roadmap" />
          </Link>
        </Readmap>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  background-color: ${props => props.theme.dColor};

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  width: 70%;
  height: 70vh;
  padding: 2rem auto;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 990px) {
    height: 60vh;
  }
`;

const Okay = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 90%;
  margin: 1rem auto;

  @media (max-width: 990px) {
    height: 60%;
  }
`;

const Letter = styled.div`
  height: 100%;
  transform: skew(-7deg);
`;

const Footer = styled.footer`
  width: 85vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${props => props.theme.bColor};
  font-size: ${props => props.theme.fontlg};
  margin: auto;

  img {
    border-radius: 6rem;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2rem;
  }
`;

const Readmap = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.aColor};

  img {
    display: block;
    width: 70px;
    height: 70px;
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    height: 10rem;
  }
`;

export default Home;
