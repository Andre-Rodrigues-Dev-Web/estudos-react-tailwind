import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  @apply text-white text-3xl md:hidden focus:outline-none;
`;

export const ButtonHamburguer = ({ onClick }) => {
  return <Button onClick={onClick}>&#9776;</Button>;
};
