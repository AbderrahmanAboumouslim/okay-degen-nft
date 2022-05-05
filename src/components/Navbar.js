import React, { useState } from 'react';
import styled from 'styled-components';
// import Button from './Button';
import Logo from '../assets/logo.svg';
import Menu from '../assets/icons/menu.png';
import Exit from '../assets/icons/exit.png';
// import { linkToMint } from './helpers';

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <Nav id="navbar">
      <Container>
        <img src={Logo} />
        <Bars onClick={() => setClick(!click)}>
          {click ? (
            <img alt="exit" src={Exit} />
          ) : (
            <img alt="menu" src={Menu} />
          )}
        </Bars>
        <List clicked={click}>
          <ListItem>Home</ListItem>
          <ListItem>Roadmap</ListItem>
          <ListItem>Declaration</ListItem>
          <ListItem>Staking</ListItem>
          <ListItem>Launchapd</ListItem>

          <div className="mobile">
            <Button text="MINT SOON" link="https://google.com" />
          </div>
        </List>
      </Container>
      <div className="mint">
        <div className="desktop">
          <Button text="MINT" link={linkToMint} />
          {/* <div id="mint-button-container" />
          <div className="left">93/100</div>
          <h3 style={{ margin: '1rem 0' }}></h3> */}
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100vw;
  background-color: ${props => props.theme.body};
  .mint {
    display: flex;
    justify-content: center;
    .left {
      display: flex;
      justify-content: center;
      margin: 1rem auto;
    }
  }
`;

const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;
  @media (max-width: 1024px) {
    .desktop {
      display: none;
    }
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  color: ${props => props.theme.text};
  .mobile {
    display: none;
  }
  @media (max-width: 1024px) {
    position: fixed;
    top: ${props => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.85)`};
    transform: ${props => `scale(${props.clicked ? '100%' : '0'})`};
    transition: all 0.5s ease;
    z-index: 999;
    .mobile {
      display: inline-block;
    }
  }
`;

const ListItem = styled.li`
  /* display: none; */
  margin: 0 1rem;
  cursor: pointer;
  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${props => props.theme.text};
    transition: all 0.2s linear;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: 1024px) {
    margin: 1rem 0;
  }
`;

const Bars = styled.div`
  width: 2.7rem;
  height: 2.7rem;
  z-index: 1000;
  cursor: pointer;
  background-color: ${props => props.theme.body};
  display: none;
  img {
    width: 100%;
    height: 100%;
    color: red;
  }
  @media (max-width: 1024px) {
    display: flex;
  }
`;

export default Navbar;
