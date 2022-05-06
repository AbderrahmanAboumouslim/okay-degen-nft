import React from 'react';
import styled from 'styled-components';

const Declaration = () => {
  return (
    <Wrapper>
      <About>
        <h2>DECLARATION</h2>
        <h1>DEGEN WITH US</h1>
        <p>
          Come as you are, as long as you are respectful. <br />
          Progress takes time, but our needs are in sync. <br />
          So put up with the grind, relax, and enjoy the ride - good
          <br /> vibes and community, it's a blast!
        </p>

        <p>
          For me, city life is fine: <br />
          work for tomorrow, we all agree. <br />
          There'll be time to drink coffee, dance, and run about, <br />
          catch up in the park, or relax under a tree.
        </p>

        <p>
          Our style is authentic to carefree life. <br />
          No resentment, no condemnation, no spit Live for tonight, <br />
          for the new twilight Please bear with me, and I will with you.
        </p>

        <p>
          Together <h3>we are Okay</h3>.
        </p>
      </About>

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

  @media (max-width: 500px) {
    text-align: center;
  }
`;

const About = styled.div`
  margin: 0 5rem;
  padding-top: 3rem;
  width: 50%;

  @media (max-width: 500px) {
    width: 80%;
    margin: 0 auto;
  }

  h1 {
    display: inline-block;
    margin-bottom: 2rem;
    background-color: ${props => props.theme.cColor};
    color: ${props => props.theme.aColor};
    font-size: ${props => props.theme.fontxxl};

    width: fit-content;
    text-align: center;
    padding: 0.4rem;
    border-radius: 1rem;

    @media (max-width: 800px) {
      font-size: ${props => props.theme.fontxl};
    }
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

const LeftFooter = styled.div`
  font-size: ${props => props.theme.fontxs};
  padding: 5rem;
`;
export default Declaration;
