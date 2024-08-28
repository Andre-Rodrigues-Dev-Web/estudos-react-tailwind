import React, { useState } from 'react';
import { Logo } from './Logo';
import { ButtonHamburguer } from './ButtonHamburguer';
import { LinksContent } from './LinksContent';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.nav`
  @apply flex items-center justify-between p-4 bg-blue-600;
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      <Logo />
      <ButtonHamburguer onClick={toggleMenu} />
      <LinksContent isOpen={isOpen} />
    </MenuContainer>
  );
};

export default Menu;
