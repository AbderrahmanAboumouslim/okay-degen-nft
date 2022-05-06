import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import daycity from '../../assets/daycity.png';
import nightcity from '../../assets/nightcity.png';
import Team from '../Team';

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
        <About>
          <h3>Okay Degens is culture shift.</h3>
          <p>An extraordinary brand built by ordinary people.</p>
          <p>
            In a polar world of winners and losers, heroes and villains, artists
            and builders, the middle ground has been left barren. That very
            ground lays the foundation of The Park, where it is okay to be okay.
          </p>
          <p>
            An immaculate collection of 555 diverse degens that grant you
            exclusive access to The Park, where together, we build a virtuous
            community that will transcend the internet into the real world.
          </p>
          <p>
            Together <h3>we are Okay</h3>.
          </p>
        </About>
        <Team />
        <QuickNote>
          <Title>BUILD WITH US</Title>
          <Info>
            Our brand is built through community, and together, we are creating
            one of the world’s leading web three brands. Since day one, our
            community has been adding building blocks to our identity. It’s how
            WAGBO was born and how #OkayDegen spread through Twitter like
            wildfire. The Okay Degen movement is about to take over, and we want
            you to degen with us.
          </Info>
        </QuickNote>
        <Links>
          <Room>
            <SubContainer>
              <SubTitle>subtitle</SubTitle>
              <SubInfo>subinfo</SubInfo>
            </SubContainer>
            <img src="" alt="little icon" />
          </Room>
        </Links>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.dColor};
  color: ${props => props.theme.bColor};
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

const QuickNote = styled.div``;

const About = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  width: 50%;
  text-align: center;

  h3 {
    display: inline-block;
    margin-bottom: 2rem;
    background-color: ${props => props.theme.cColor};
    width: fit-content;
    text-align: center;
    padding: 0.4rem;
    border-radius: 1rem;
  }

  p {
    padding-bottom: 2rem;
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.aColor};
  text-transform: capitalize;
  font-size: ${props => props.theme.fontxxl};
  border-bottom: 2px solid ${props => props.theme.aColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  margin: 0rem auto;
  width: fit-content;
`;

const Info = styled.div`
  text-align: center;
  padding: 2rem;
  font-weight: 300;
`;

const Links = styled.div``;

const Room = styled.div``;

const SubContainer = styled.div``;

const SubTitle = styled.div``;

const SubInfo = styled.div``;

export default Station;
