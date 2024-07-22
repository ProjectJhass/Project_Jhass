import React from 'react';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';

const PageCompany = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-start px-8">
        <div className="flex justify-between w-full my-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Crear Empresa</button>
          <h2 className="text-lg font-semibold">Mis Empresas</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Empresas</button>
        </div>
        <div className="bg-[#EEEEEE] p-4 rounded shadow-md text-center w-64 my-4">
          <p className="text-lg font-semibold">Nombre de la empresa</p>
          <p>Descripcion</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageCompany;

