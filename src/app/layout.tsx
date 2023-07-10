import { Nunito_Sans } from 'next/font/google';

import { Provider } from '../context/useProvider';
import GlobalStyle from './styles/global';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800']
});

export const metadata = [
  {
    href: '/',
    title: 'Home Page'
  },
  {
    href: 'infoPais',
    title: 'Info País'
  }
];

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="Icone" href="/icon.png" />
      </head>
      <body className={nunitoSans.className}>
        <Provider>
          <GlobalStyle />
          {children}
        </Provider>
      </body>
    </html>
  );
}
