import React from 'react';

const Pais = ({ params: { name } }: { params: { name: string } }) => {
  return <div>{name}</div>;
};

export default Pais;
