import React, { useState } from 'react';
import styled from 'styled-components';
import { phases } from '../Helpers';

const Roadmap = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState([]);

  const LeftDisplay = id => {
    setIsOpen(!isOpen);
    setShow(id);
  };

  return (
    <Wrapper>
      <h2>ROADMAP</h2>
      <h1>WE'RE BUILDING THIS TOGETHER</h1>
      <Grid>
        <Left onClick={() => LeftDisplay(phases.phase1)}>PHASE 1</Left>
        <Center>
          <One onClick={() => LeftDisplay(phases.phase2)}>PHASE 2</One>
          <Two onClick={() => LeftDisplay(phases.phase3)}>PHASE 3</Two>
          <Three onClick={() => LeftDisplay(phases.phase4)}>PHASE 4</Three>
          <Four onClick={() => LeftDisplay(phases.phase5)}>PHASE 5</Four>
        </Center>
        <Right onClick={() => LeftDisplay(phases.phase6)}>PHASE 6</Right>

        {isOpen ? (
          <div className="ai">
            <article>
              <h1 onClick={() => setIsOpen(!isOpen)}>X</h1>
              {show.map((s, i) => {
                return <div key={i}>{s}</div>;
              })}
            </article>
          </div>
        ) : null}
      </Grid>
      <Note>
        We're not simply publishing a roadmap, we're setting out the blueprint
        for a community-focused, world-leading web three brand.
      </Note>
      <LeftFooter>
        © {new Date().getFullYear()}, Okay Degens <br /> All right reserved.
      </LeftFooter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.dColor};
  color: ${props => props.theme.bColor};

  h2 {
    text-align: center;
  }

  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    background-color: ${props => props.theme.cColor};
    color: ${props => props.theme.aColor};
    font-size: ${props => props.theme.fontxxl};

    width: fit-content;
    text-align: center;
    padding: 0.4rem;
    border-radius: 1rem;
    margin: 2rem auto;

    @media (max-width: 800px) {
      font-size: ${props => props.theme.fontxl};
    }
  }
`;

const Grid = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-areas: 'left center center right' 'left center center right';

  @media (max-width: 768px) {
    grid-template-areas: 'left left' ' center center ' ' center center ' ' right  right';
  }

  gap: 1rem;

  width: 95vw;
  height: 70vh;
  margin: 0 auto;

  border-radius: 3rem;
  overflow: hidden;

  position: relative;

  .ai {
    text-align: center;
    position: absolute;
    inset: 0;
    background-color: black;
    opacity: 0.8;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 6rem;
    line-height: 3rem;

    font-size: 1.4rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.6rem;
      padding: 0 1rem;
    }

    h1 {
      background-color: ${props => props.theme.dColor};
      border-radius: 50%;
      width: fit-content;
      margin: 0 auto;
      margin-bottom: 4rem;
      width: 4rem;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: ${props => props.theme.bColor};
      }
    }
  }
`;
const Left = styled.div`
  grid-area: left;
  background-color: gray;
  color: ${props => props.theme.aColor};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;
const Center = styled.div`
  grid-area: center;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  color: ${props => props.theme.aColor};
`;
const Right = styled.div`
  grid-area: right;
  background-color: aqua;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.aColor};

  &:hover {
    opacity: 0.8;
  }
`;

const One = styled.div`
  background-color: lightblue;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;
const Two = styled.div`
  background-color: lightcoral;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;
const Three = styled.div`
  background-color: lightsalmon;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;
const Four = styled.div`
  background-color: lightgray;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

const Note = styled.div`
  color: ${props => props.theme.aColor};
  padding: 3rem 2rem;
  width: 40vw;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const LeftFooter = styled.div`
  font-size: ${props => props.theme.fontxs};
  padding: 5rem;
`;

export default Roadmap;
