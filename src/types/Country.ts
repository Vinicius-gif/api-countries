export interface Country {
  name: {
    common: string;
  };
  nativeName: {
    ara: {
      official: string;
    };
  };
  currencies: {
    JOD: {
      name: string;
    };
  };
  languages: {
    ara: string;
  };
  flags: {
    png: string;
  };
  region: string;
  population: number;
  subregion: string;
  capital: string[];
  borders: string[];
}
