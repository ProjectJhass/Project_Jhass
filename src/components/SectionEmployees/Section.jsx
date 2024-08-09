import React, { useContext } from 'react';
import { Card } from './Card';



import { AppContext } from '../Context/Context';



export const Section = () => {
  const NewContext = useContext(AppContext);

  return (
    <section className=" flex flex-wrap justify-around w-full min-h-[478px] h-auto">
      {NewContext.cards.map(( card, index) => (
        
        <Card
          key={index}
          img={card.img}
          nombre={card.nombre}
          rol={card.rol}

          
        />
        
      )
    )
  }

    </section>
  );
};
