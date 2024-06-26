import React from 'react'
import { Card } from '../../Card/Card'
import { Cards } from '../../Cards/Cards'


export const Section3 = () => {
  return (
    <>
    <div className='bg-[#EEEEEE] py-8'>
    <div className='text-center mb-8 bg-'>
        <h1 className="text-2xl font-bold mb-4">El CRM que potencia tu empresa y facilita la gestión de empleados</h1>
        <p className="text-gray-600">JHASS es un CRM diseñado para optimizar la productividad y simplificar la gestión de recursos humanos en tu empresa. Ofrece una plataforma intuitiva que organiza datos y mejora la comunicación y eficiencia operativa, llevando tu negocio al siguiente nivel.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-[5rem]">
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
      
    </>

  )
}
