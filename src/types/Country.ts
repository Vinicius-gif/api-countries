export interface Country {
  name: {
    common: string;
  };
  nativeName: string;
  currencies?: {
    [key: string]: {
      name: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
  flags: {
    png: string;
  };
  region: string;
  population: number;
  subregion: string;
  cca3: string;
  capital: string[];
  borders?: string[];
}
