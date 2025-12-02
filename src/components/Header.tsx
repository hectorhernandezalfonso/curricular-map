import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-5 text-center shadow-md">
      <h1 className="text-3xl font-bold m-0">
        Programa Curricular - Ingeniería Química (Acuerdo XX de 2024)
      </h1>
      <p className="text-base mt-1 mb-0">Sede Bogotá, Facultad de Ingeniería</p>
    </header>
  );
};

export default Header;