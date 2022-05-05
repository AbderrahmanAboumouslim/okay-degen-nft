import React from 'react';
import styled from 'styled-components';
const Button = ({ text, link }) => {
  return (
    <Bt href={link} area-label={text} target="_blank" rel="noreferrer">
      {text}
    </Bt>
  );
};

const Bt = styled.a`
  display: inline-block;
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
  border: none;
  outline: none;
  font-size: ${props => props.theme.fontsm};
  padding: 0.8rem 2.4rem;
  border-radius: ${props => props.theme.fontxl};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  &:hover {
    transform: scale(0.9);
  }
  &::after {
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px solid ${props => props.theme.text};
    border-radius: ${props => props.theme.fontxl};
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.35s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.2rem;
  }
`;

export default Button;
