import React from 'react'
import { Card } from '../../Card/Card'
import { Cards } from '../../Cards/Cards'


export const Section3 = () => {
  return (
    <>
    <h1>El CRM que potencia tu empresa y facilita la gestión de empleados</h1>
    <p>JHASS es un CRM diseñado para optimizar la productividad y simplificar la gestión de recursos humanos en tu empresa. Ofrece una plataforma intuitiva que organiza datos y mejora la comunicación y eficiencia operativa, llevando tu negocio al siguiente nivel.</p>

    <div className="flex flex-wrap gap-4">
      {Cards.map((card, index) => (
        <Card
          key={index}
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
    </>
  )
}
