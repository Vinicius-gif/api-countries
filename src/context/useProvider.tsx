'use client';

import Header from '../components/Header';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import dark from '../app/styles/themes/dark';
import light from '../app/styles/themes/light';
import usePersistedState from '../utils/usePersistedState';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      {children}
    </ThemeProvider>
  );
};
