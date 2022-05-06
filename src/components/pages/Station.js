import React, { useState } from 'react';
import { FaDiscord, FaRoad, FaTwitter, FaVoicemail } from 'react-icons/fa';
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
          <a href="https://twitter.com/OkayDegen">
            <Room>
              <SubContainer>
                <SubTitle>TWITTER</SubTitle>
                <SubInfo>Be the first to know</SubInfo>
              </SubContainer>
              <FaTwitter />
            </Room>
          </a>
          <Link to="/roadmap">
            <Room>
              <SubContainer>
                <SubTitle>ROADMAP</SubTitle>
                <SubInfo>Read our roadmap</SubInfo>
              </SubContainer>
              <FaRoad />
            </Room>
          </Link>

          <Link to="/declaration">
            <Room>
              <SubContainer>
                <SubTitle>DECLARATION</SubTitle>
                <SubInfo>Degen with us</SubInfo>
              </SubContainer>
              <FaVoicemail />
            </Room>
          </Link>

          <a href="http://discord.gg/SEStyQMWmx">
            <Room>
              <SubContainer>
                <SubTitle>DISOCRD</SubTitle>
                <SubInfo>Enter the station</SubInfo>
              </SubContainer>
              <FaDiscord />
            </Room>
          </a>
        </Links>
      </Container>
      <LeftFooter style={{ textAlign: 'center' }}>
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
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const HeadText = styled.div`
  padding: 3rem 0;

  @media (max-width: 500px) {
    text-align: center;
  }

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

    @media (max-width: 500px) {
      font-size: ${props => props.theme.fontlg};
    }
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

  @media (max-width: 500px) {
    width: 80%;
  }

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

  @media (max-width: 500px) {
    font-size: ${props => props.theme.fontxl};
  }
`;

const Info = styled.div`
  text-align: center;
  padding: 2rem;
  font-weight: 300;
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  a {
    display: inline-block;
    width: 90%;
    height: auto;
    margin: 0.5rem auto;
    margin-left: 2.5rem;
  }
`;

const Room = styled.div`
  width: 70%;
  background-color: ${props => props.theme.cColor};
  /* margin: 1rem; */
  padding: 2rem;
  border-radius: 0.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 2.5rem;
  }

  &:hover {
    background-color: #fff;
  }
`;

const SubContainer = styled.div`
  width: 100%;
`;

const SubTitle = styled.div`
  color: ${props => props.theme.aColor};
`;

const SubInfo = styled.div`
  color: ${props => props.theme.bColor};
`;

const LeftFooter = styled.div`
  font-size: ${props => props.theme.fontxs};
  padding: 2rem;
`;
export default Station;
