import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <h1>Outra Página</h1>
      <Link href="/" rel="lalalu">
        Voltar para home
      </Link>
    </div>
  );
};

export default page;
