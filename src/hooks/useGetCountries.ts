import { Country } from '../types/Country';

export async function getCountries(): Promise<Country[]> {
  const res = await fetch('https://restcountries.com/v3.1/all');

  return res.json();
}
