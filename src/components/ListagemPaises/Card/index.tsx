'use client';

import React from 'react';

import { styled } from 'styled-components';

const ContainerCard = styled.div`
  width: 90%;
  height: 200px;
  background-color: ${(props) => props.theme.colors.elements};
  border-radius: 4px;
`;

const Titulo = styled.h2`
  font-size: 13px;
  font-weight: 600;
`;

const Paragrafo = styled.h2`
  font-size: 10px;
  font-weight: 300;
  & strong {
    font-weight: 600;
  }
`;

type Props = {
  name: string;
  population: number;
  region: string;
  capital: string[];
};

const Card = ({ name, population, region, capital }: Props) => {
  return (
    <ContainerCard>
      <img src="" alt="bandeira" />
      <Titulo>{name}</Titulo>
      <Paragrafo>
        <strong>Population:</strong>
        {population}
      </Paragrafo>
      <Paragrafo>
        <strong>Region:</strong>
        {region}
      </Paragrafo>
      <Paragrafo>
        <strong>Capital:</strong>
        {capital}
      </Paragrafo>
    </ContainerCard>
  );
};

export default Card;
