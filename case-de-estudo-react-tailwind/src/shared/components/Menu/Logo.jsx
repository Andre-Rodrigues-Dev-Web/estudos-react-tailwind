import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = styled.div`
  @apply text-white text-2xl font-bold;
`;

const LogoImage = styled.img`
  @apply h-10 w-auto;
`;

export const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <LogoImage src="/path/to/your/logo.png" alt="Logo Sicoob" />
      </Link>
    </LogoContainer>
  );
};
