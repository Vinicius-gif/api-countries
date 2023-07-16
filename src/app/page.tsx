import React from 'react';

import ListagemPaises from '../components/ListagemPaises';

import { getCountries } from '../hooks/useGetCountries';

const Page = async () => {
  const countries = await getCountries();

  return (
    <>
      <ListagemPaises countries={countries} />
    </>
  );
};

export default Page;
