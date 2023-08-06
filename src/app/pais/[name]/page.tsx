import Link from 'next/link';
import React from 'react';

import { Country } from '../../../types/Country';

async function getCountryByName(name: string): Promise<Country> {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  return (await response.json())[0];
}

async function getCountryBordersByName(name: string) {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries: Country[] = await response.json();

  const country = countries.find(
    (country: Country) => country.name.common === name
  )!;

  return country.borders?.map((border) => {
    const borderCountry = countries.find((country) => country.cca3 === border)!;
    return {
      name: borderCountry.name.common
    };
  });
}

const Pais = async ({ params: { name } }: { params: { name: string } }) => {
  const country = await getCountryByName(decodeURI(name));
  const borderCountries = await getCountryBordersByName(decodeURI(name));

  const formatter = Intl.NumberFormat('en', { notation: 'compact' });

  return (
    <div>
      <div>
        <Link href="/">
          <button>Voltar</button>
        </Link>
      </div>
      <div>
        <div>
          <img src={country.flags.png} alt="bandeira" />
        </div>
        <div>
          <div>
            <h2>{country.name.common}</h2>
            <ul>
              {country.nativeName && <li>Native name: {country.nativeName}</li>}
              <li>Population: {formatter.format(country.population)}</li>
              <li>Region: {country.region}</li>
              <li>Subregion: {country.subregion}</li>
              <li>Capital: {country.capital}</li>
              {country.currencies && (
                <li>
                  Currencies:
                  {Object.values(country.currencies).map((currencie) => (
                    <span key={currencie.name}> {currencie.name}, </span>
                  ))}
                </li>
              )}
              {country.languages && (
                <li>
                  Languages:
                  {Object.values(country.languages).map((language) => (
                    <span key={language}> {language}, </span>
                  ))}
                </li>
              )}
            </ul>
            <h2>
              Border Countries:
              {borderCountries?.map((pais) => (
                <p key={pais.name}>{pais.name}</p>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pais;
