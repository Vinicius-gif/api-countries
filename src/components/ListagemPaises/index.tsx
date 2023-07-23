'use client';

import { useState, useEffect } from 'react';

import SearchBar from '../SearchBar';
import Card from './Card';
import { Container } from './style';

const ListagemPaises = () => {
  const [paises, setPaises] = useState([]);

  async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const jsonData = await response.json();
    setPaises(jsonData);
  }

  useEffect(() => {
    getCountries();
  }, []);

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
