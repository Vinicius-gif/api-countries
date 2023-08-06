'use client';

import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext, styled } from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.elements};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const Titulo = styled.h2`
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
`;

interface Props {
  toggleTheme(): void;
}

const Header = ({ toggleTheme }: Props) => {
  const { title } = useContext(ThemeContext);

  const router = useRouter();
  return (
    <Container>
      <Titulo onClick={() => router.push('/')}>Onde Pelo Mundo?</Titulo>
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
