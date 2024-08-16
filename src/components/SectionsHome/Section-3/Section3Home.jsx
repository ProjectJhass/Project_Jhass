import React from 'react'
import { Card } from '../Card/Card'
import { Cards } from '../Cards/Cards'


export const Section3Home = () => {
  return (
    <>
    <div className='bg-[#EEEEEE] py-8 h-[500px] mb-[200px]'>
    <div className='mb-8 flex flex-col  text-center  items-center'>
        <h1 className="text-3xl font-bold mb-4 font-Open-Sans w-[700px]">El CRM que potencia tu empresa y facilita la gestión de empleados</h1>
        <p className="text-gray-600 font-Open-Sans w-[600px]">JHASS es un CRM diseñado para optimizar la productividad y simplificar la gestión de recursos humanos en tu empresa. Ofrece una plataforma intuitiva que organiza datos y mejora la comunicación y eficiencia operativa, llevando tu negocio al siguiente nivel.</p>
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
