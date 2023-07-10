'use client';

import React, { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext, styled } from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.elements};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

interface Props {
  toggleTheme(): void;
}

const Header = ({ toggleTheme }: Props) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Onde Pelo Mundo?
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
      />
    </Container>
  );
};

export default Header;
