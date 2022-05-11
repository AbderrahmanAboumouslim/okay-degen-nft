import React, { useState } from 'react';
import styled from 'styled-components';
import { whitepaper } from '../Helpers';

const Whitepaper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(whitepaper.p0);

  const DisplayInfo = id => {
    setIsOpen(true);
    setShow(id);
  };
  return (
    <Wrapper>
      <Container>
        <Phases>
          <Phase onClick={() => DisplayInfo(whitepaper.p0)}>Introduction</Phase>
          <Phase onClick={() => DisplayInfo(whitepaper.p1)}>Phase 1</Phase>
          <Phase onClick={() => DisplayInfo(whitepaper.p2)}>Phase 2</Phase>
          <Phase onClick={() => DisplayInfo(whitepaper.p3)}>Phase 3</Phase>
          <Phase onClick={() => DisplayInfo(whitepaper.p4)}>Phase 4</Phase>
          <Phase onClick={() => DisplayInfo(whitepaper.p5)}>Phase 5</Phase>
          <Phase onClick={() => DisplayInfo(whitepaper.p6)}>Phase 6</Phase>
        </Phases>

        {isOpen ? (
          <Display>
            <div>
              {show.map((s, i) => {
                return <p key={i}>{s}</p>;
              })}
            </div>
          </Display>
        ) : (
          <p className="initial">{show}</p>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.dColor};
  color: ${props => props.theme.cColor};
  /* font-family: 'Rubik Wet Paint', cursive; */
  line-height: 1.6;

  font-size: 2rem;

  .initial {
    padding: 2rem 0.4rem;
    font-size: 1.5rem;
    letter-spacing: 2px;
  }

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const Container = styled.div`
  width: 90vw;
  min-height: 90vh;
  background-color: ${props => props.theme.aColor};
  margin: auto;
  border-radius: 2rem;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Phases = styled.div`
  background-color: ${props => props.theme.dColor};
  border-radius: 2rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: auto;
`;

const Phase = styled.div`
  cursor: pointer;
  width: 80%;
  text-align: center;
  background-color: ${props => props.theme.cColor};
  color: ${props => props.theme.aColor};

  padding: 1rem 0;
  margin: 0.4rem auto;
  border-radius: 1rem;

  &:hover {
    color: ${props => props.theme.cColor};

    background-color: ${props => props.theme.aColor};
  }
`;

const Display = styled.div`
  padding: 2rem 0.4rem;
  letter-spacing: 1px;
  /* font-family: 'Rubik Wet Paint', cursive; */
  font-size: 1.5rem;

  p {
    margin-bottom: 3rem;
  }

  @media (max-width: 1024px) {
    text-align: center;
    font-size: 1rem;
  }
`;

export default Whitepaper;
