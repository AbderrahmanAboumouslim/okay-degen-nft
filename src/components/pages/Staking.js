import React from 'react';
import styled from 'styled-components';

const Staking = () => {
  return (
    <Wrapper>
      <h1>SOON</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  background-color: ${props => props.theme.dColor};
  color: ${props => props.theme.bColor};

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: ${props => props.theme.dColor};
  }
`;

export default Staking;
