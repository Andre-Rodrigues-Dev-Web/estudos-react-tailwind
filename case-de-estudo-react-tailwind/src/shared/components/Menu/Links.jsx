import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinksContainer = styled.div`
  @apply md:flex md:items-center md:w-auto w-full md:static absolute top-full left-0 bg-blue-600 md:bg-transparent md:mt-0 transition-all duration-300 ease-in-out;
  ${({ isOpen }) => (isOpen ? `@apply block` : `@apply hidden`)};
`;

const NavLink = styled(Link)`
  @apply block md:inline-block px-4 py-2 text-white hover:bg-blue-700;
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
