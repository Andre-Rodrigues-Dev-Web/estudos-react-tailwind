import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 24px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ButtonHamburguer = ({ onClick }) => {
  return <Button onClick={onClick}>&#9776;</Button>;
};
