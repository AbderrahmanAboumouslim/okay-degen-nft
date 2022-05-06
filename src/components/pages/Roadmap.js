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
            <h1 onClick={() => setIsOpen(!isOpen)}>Go back to roadmap</h1>
            {show.map((s, i) => {
              return <div key={i}>{s}</div>;
            })}
          </div>
        ) : null}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.dColor};
  color: ${props => props.theme.bColor};
`;

const Grid = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-areas: 'left center center right' 'left center center right';
  gap: 1rem;

  width: 80vw;
  height: 70vh;
  margin: 0 auto;

  position: relative;

  .ai {
    position: absolute;
    inset: 0;
    background-color: black;
    opacity: 0.8;
  }
`;
const Left = styled.div`
  grid-area: left;
  background-color: gray;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Center = styled.div`
  grid-area: center;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
const Right = styled.div`
  grid-area: right;
  background-color: aqua;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const One = styled.div`
  background-color: lightblue;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Two = styled.div`
  background-color: lightcoral;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Three = styled.div`
  background-color: lightsalmon;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Four = styled.div`
  background-color: lightgray;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Roadmap;
