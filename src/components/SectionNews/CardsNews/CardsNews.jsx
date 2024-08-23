import React from 'react'
import { CardNew } from '../CardNew/CardNew'


export const cardsData = [
    {
        _id: 1,
        descripcion: 'descripcion 1',
        fecha: '21/08/2024'
    },
    {
        _id: 2,
        descripcion: 'descripcion 12',
        fecha: '22/08/2024'
    }
];

export const CardsNews = () => {
    return (
      <>
        {cardsData.map(card => (
          <div key={card._id}>
            <CardNew
              descripcionNew={card.descripcion}
              fechaNew={card.fecha}
            />
          </div>
        ))}
      </>
    );
  };