import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

export const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <LogoImage src="https://www.sicoob.com.br/documents/20128/1144635/LOGO-SICOOB-Pura-pos.png/855a0660-db5b-bc04-5602-893b90a87365?t=1576538144644" alt="MyBrand Logo" />
      </Link>
    </LogoContainer>
  );
};
