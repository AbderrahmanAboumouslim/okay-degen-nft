import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Logo from '../assets/logo.png';
import Menu from '../assets/icons/menu.png';
import Exit from '../assets/icons/exit.png';
import { linkToMint } from './Helpers';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <Nav id="navbar">
      <Container>
        <img src={Logo} />

        <List clicked={click}>
          <Link to="/" onClick={() => setClick(false)}>
            <ListItem>Home</ListItem>
          </Link>
          <Link to="/station" onClick={() => setClick(false)}>
            <ListItem>Station</ListItem>
          </Link>
          <Link to="roadmap" onClick={() => setClick(false)}>
            <ListItem>Roadmap</ListItem>
          </Link>
          <Link to="whitepaper" onClick={() => setClick(false)}>
            <ListItem>Whitepaper</ListItem>
          </Link>
          <Link to="declaration" onClick={() => setClick(false)}>
            <ListItem>Declaration</ListItem>
          </Link>
          {/* <div disabled="true" onClick={() => setClick(false)}>
            <ListItem>Staking</ListItem>
          </div>

          <div disabled="true" onClick={() => setClick(false)}>
            <ListItem>Launchpad</ListItem>
          </div> */}
        </List>
        {/* <div className="mobile">
          <Button text="MINT SOON" link="https://google.com" />
        </div> */}

        <Socials>
          <a
            href="https://twitter.com/OkayDegen"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>

          <a
            href="http://discord.gg/SEStyQMWmx"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord />
          </a>
        </Socials>

        <Bars onClick={() => setClick(!click)}>
          {click ? (
            <img alt="exit" src={Exit} />
          ) : (
            <img alt="menu" src={Menu} />
          )}
        </Bars>
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100vw;
  background-color: ${props => props.theme.dColor};
  /* .mint {
    display: flex;
    justify-content: center;
    .left {
      display: flex;
      justify-content: center;
      margin: 1rem auto;
    }
  } */
  img {
    width: fit-content;
    height: 10rem;

    padding-bottom: 1rem;
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
  color: ${props => props.theme.bColor};
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
  border: 2px solid ${props => props.theme.bColor};
  background-color: ${props => props.theme.cColor};
  color: ${props => props.theme.bColor};
  transition: all 0.2s linear;
  padding: 0.4rem;
  border-radius: 1rem;

  &:hover {
    background-color: #fff;
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

const Socials = styled.div`
  svg {
    cursor: pointer;
    background-color: ${props => props.theme.cColor};
    fill: ${props => props.theme.bColor};
    margin: 0 0.5rem;
    font-size: 1.5rem;
    padding: 0.4rem;
    border-radius: 1rem;

    &:hover {
      background-color: #fff;
    }
  }
`;

export default Navbar;
