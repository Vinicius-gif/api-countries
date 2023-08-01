'use client';

import Link from 'next/link';
import React from 'react';

import { styled } from 'styled-components';

const ContainerCard = styled.div`
  width: 70%;
  height: 280px;
  background-color: ${(props) => props.theme.colors.elements};
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
`;

const Bandeira = styled.img`
  width: 100%;
  height: 130px;
  border-radius: 4px 4px 0px 0px;
`;

const Informacoes = styled.div`
  margin-left: 20px;
  margin-top: 20px;

  & h2 {
    margin-bottom: 10px;
  }

  & p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const Titulo = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
`;

const Paragrafo = styled.p`
  font-size: 14px;
  font-weight: 300;
  & strong {
    font-weight: 600;
  }
`;

type Props = {
  href: string;
  name: string;
  population: number;
  region: string;
  capital: string[];
  flag: string;
};

const Card = ({ href, name, population, region, capital, flag }: Props) => {
  return (
    <ContainerCard>
      <Bandeira src={flag} alt="bandeira" />
      <Informacoes>
        <Titulo href={href}>{name}</Titulo>
        <Paragrafo>
          <strong>Population: </strong>
          {population}
        </Paragrafo>
        <Paragrafo>
          <strong>Region: </strong>
          {region}
        </Paragrafo>
        <Paragrafo>
          <strong>Capital: </strong>
          {capital}
        </Paragrafo>
      </Informacoes>
    </ContainerCard>
  );
};

export default Card;
