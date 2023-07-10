import { getCountries } from '../../hooks/useGetCountries';
import Card from './Card';
import { Container } from './style';

const ListagemPaises = async () => {
  const countries = await getCountries();
  console.log(countries);

  return (
    <Container>
      {countries.map((country) => (
        <Card
          key={country.name.common}
          name={country.name.common}
          population={country.population}
          capital={country.capital}
          region={country.region}
        />
      ))}
    </Container>
  );
};

export default ListagemPaises;
