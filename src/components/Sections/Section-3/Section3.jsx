import React from 'react'
import { Card } from '../../Card/Card'
import { Cards } from '../../Cards/Cards'


export const Section3 = () => {
  return (
    <>
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
