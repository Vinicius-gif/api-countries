import './globals.css';
import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800']
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Home Page</title>
        <link rel="Icone" href="/icon.png" />
      </head>
      <body className={nunitoSans.className}>
        <h1>Header</h1>
        {children}
      </body>
    </html>
  );
}
