import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import daycity from '../../assets/daycity.png';
import nightcity from '../../assets/nightcity.png';

const Station = () => {
  const [over, setOver] = useState(false);

  const Over = () => {
    setOver(!over);
  };

  const Out = () => {
    setOver(!over);
  };

  return (
    <Wrapper>
      <Container>
        <HeadText>
          <p>THE STATION</p>
          <h1>A PLACE TO FIT IN.</h1>
          <h1>A SPACE TO STAND OUT.</h1>
        </HeadText>
        <Banner>
          <img
            src={over ? nightcity : daycity}
            onMouseOver={Over}
            onMouseOut={Out}
            alt="day night city"
          />
        </Banner>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.dColor};
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const HeadText = styled.div`
  padding: 3rem 0;

  p {
    font-weight: 700;
    margin-bottom: 1.4rem;
    font-size: ${props => props.theme.fontlg};
    color: ${props => props.theme.bColor};
  }

  h1 {
    font-weight: bold;
    font-style: italic;
    font-size: ${props => props.theme.fontxl};
    color: ${props => props.theme.aColor};
  }
`;

const Banner = styled.div`
  width: 100%;

  img {
    transition: all 2s linear;
  }
`;

export default Station;
