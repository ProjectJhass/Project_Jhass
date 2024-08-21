import React from 'react'
import { CardNew } from '../CardNew/CardNew'
import { AppContext } from '../../Context/Context'
import { useContext } from 'react'


export const SectionCards = () => {
    const {cardsNew}= useContext(AppContext)
  return (
    <section className='w-full h-full'>
        {cardsNew.map((card)=>(
            <CardNew
            key={card._id}
            fecha={card.fecha}
            descripcion={card.descripcion}
            _id={card._id}
            
            />


        ))}
    </section>
  )
}
