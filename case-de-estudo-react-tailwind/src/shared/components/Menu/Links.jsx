import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinksContainer = styled.div`
  background-color: #003c44;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 8px 0;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  
  @media (min-width: 768px) {
    display: flex;
    position: static;
    background-color: transparent;
    width: auto;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  padding: 8px 16px;
  color: white;
  text-decoration: none;
  @media (min-width: 768px) {
    padding: 8px 12px;
  }
`;

export const LinksContent = ({ isOpen }) => {
  return (
    <LinksContainer isOpen={isOpen}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </LinksContainer>
  );
};
