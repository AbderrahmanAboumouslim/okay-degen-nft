import React from 'react';
import styled from 'styled-components';
// import images
import Face1 from '../assets/face/face1.jpeg';
import Face2 from '../assets/face/face2.jpeg';
import Face3 from '../assets/face/face3.jpeg';

const teamData = [
  {
    pic: Face1,
    name: 'DEVID',
    role: 'Founder',
    info: 'Previously an engineer, now an emerging leader in developing and nurturing web3 communities. Devid brings experience working in a strategic design consulting firm engaged in leading NFT collection projects for established international teams.',
  },
  {
    pic: Face2,
    name: 'Amelia',
    role: 'Artist',
    info: 'After completing her Masters of Fine Arts from NYU, Amelia worked on a diverse range of global creative projects including illustration for established international toy companies and financial institutions before joining our Okay Degen team.',
  },
  {
    pic: Face3,
    name: 'Loucas',
    role: 'Co-Developer',
    info: 'With a background in industrial design and extensive certification in UX practice. Loucas has worked on a wide range of design and creative projects including UX, UI and web development for global startups and government agencies.',
  },
];

const Team = () => {
  return (
    <Wrapper id="team">
      <Title>DEGEN WITH US</Title>
      <TeamContainer>
        {teamData.map((n, i) => {
          return (
            <Container>
              <div key={i}>
                <img src={n.pic} alt="team" />
              </div>
              <Flex>
                <Name>{n.name}</Name>
                <Role>{n.role}</Role>
              </Flex>
              <Info>{n.info}</Info>
            </Container>
          );
        })}{' '}
      </TeamContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* min-height: 100vh; */
  /* width: 100vw; */
  background-color: ${props => props.theme.body};
  position: relative;
  margin: auto;
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

const TeamContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    width: 85%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

const Container = styled.article`
  width: calc(20rem - 3.5vw);
  height: auto;
  color: ${props => props.theme.body};
  /* padding: 1.2rem 0; */
  margin: 2rem 0.9rem;
  border: 2px solid ${props => props.theme.bColor};
  border-radius: 1.1rem;
  position: relative;
  z-index: 10;
  backdrop-filter: blur(5px);
  transition: all 0.2s linear;
  overflow: hidden;
  &:hover {
    border-color: ${props => props.theme.aColor};
  }
  img {
    width: calc(20rem - 3.5vw);
    height: calc(20rem - 3.5vw);
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Name = styled.h1`
  font-size: ${props => props.theme.fontlg};
  color: ${props => props.theme.aColor};
  background-color: ${props => `rgba(${props.theme.textRgba},0.1)`};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin-top: 1rem;
`;

const Role = styled.h2`
  font-size: ${props => props.theme.fontlg};
  color: ${props => `rgba(${props.theme.dColor},0.6)`};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  margin-top: 1rem;
`;

const Info = styled.div`
  text-align: center;
  padding: 0.5rem;
  font-weight: 300;
`;
export default Team;
