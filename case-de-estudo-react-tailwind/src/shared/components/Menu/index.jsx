import React, { useState } from 'react';
import { Logo } from './Logo';
import { ButtonHamburguer } from './ButtonHamburguer';
import { LinksContent } from './Links';
import styled from 'styled-components';

const MenuContainer = styled.nav`
  background-color: #003c44;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 16px;
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
