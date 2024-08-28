import styled from 'styled-components';

export const ContainerButtonHamburguer = styled.button`
  background-color: transparent;
  display: block;

  @media (min-width: 48em) {
    display: none;
  }
`;

export const ContainerLinks = styled.nav`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};

  @media (min-width: 48em) {
    display: block;
    min-width: 640px;
  }
`;
