import React from 'react';
import { Card } from '../Card/Card';
import { Cards } from '../Cards/Cards';

export const Section3Home = () => {
  return (
    <div className='bg-[#EEEEEE]  w-full py-16'>
      <div className='md:flex flex-col w-full items-center text-center mb-12'>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 font-serif px-[20px] max-w-4xl">
          El CRM que potencia tu empresa y facilita la gestión de empleados
        </h1>
        <p className="text-gray-600 text-lg px-[20px] max-w-3xl">
          JHASS es un CRM diseñado para optimizar la productividad y simplificar la gestión de recursos humanos en tu empresa. Ofrece una plataforma intuitiva que organiza datos y mejora la comunicación y eficiencia operativa, llevando tu negocio al siguiente nivel.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {Cards.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};
