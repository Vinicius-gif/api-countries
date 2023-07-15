import { getCountries } from '../../hooks/useGetCountries';
import SearchBar from '../SearchBar';
import Card from './Card';
import { Container } from './style';

const ListagemPaises = async () => {
  const countries = await getCountries();

  // const countryFilter = (nomeDoPais: string) => {
  //   const paisesFiltrados = [];
  //   if (nomeDoPais === '') {
  //     getCountries();
  //   }
  //   for (const i in countries) {
  //     if (countries[i].name.common.includes(nomeDoPais)) {
  //       paisesFiltrados.push(countries[i]);
  //     }
  //   }
  //   setCountries(paisesFiltrados);
  // };

  return (
    <div>
      <SearchBar />
      <Container>
        {countries.map((country) => (
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
