'use client';

import { useState } from 'react';

import { getCountries } from '../../hooks/useGetCountries';
import { Country } from '../../types/Country';
import SearchBar from '../SearchBar';
import Card from './Card';
import { Container } from './style';

type Props = {
  countries: Country[];
};

const ListagemPaises = ({ countries }: Props) => {
  const [paises, setPaises] = useState(countries);

  const countryFilter = (nomeDoPais: string) => {
    const paisesFiltrados = [];
    if (nomeDoPais === '') {
      getCountries();
    }
    for (const i in paises) {
      if (paises[i].name.common.toLowerCase().includes(nomeDoPais)) {
        paisesFiltrados.push(paises[i]);
      }
    }
    setPaises(paisesFiltrados);
  };

  return (
    <div>
      <SearchBar countryFilter={countryFilter} />
      <Container>
        {paises.map((country) => (
          <Card
            key={country.name.common}
            name={country.name.common}
            population={country.population}
            capital={country.capital}
            region={country.region}
            flag={country.flags.png}
          />
        ))}
      </Container>
    </div>
  );
};

export default ListagemPaises;
