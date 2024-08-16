// import React, { useContext, useState, useEffect } from 'react';
// import { AppContext } from '../../../Context/Context';
// import FilterTracking from '../../../employeeTracking/FilterTracking/FilterTracking';
// import { Card } from '../../Card';

// export const SectionViewRole = () => {
//   // const { cards, filter } = useContext(AppContext);
//   // const [filteredCards, setFilteredCards] = useState(cards);

//   // // Función para manejar el cambio de filtro
//   // const handleFilterChange = (filterValue) => {
//   //   const filtered = cards.filter(card =>
//   //     card.nombreCompleto.toLowerCase().includes(filterValue.toLowerCase())
//   //   );
//   //   setFilteredCards(filtered);
//   // };

//   // // Actualizar los productos filtrados cuando cambie el filtro
//   // useEffect(() => {
//   //   handleFilterChange(filter);
//   // }, [filter, cards]);
  
//   return (
//     <section className="w-full h-auto">
//       <FilterTracking onFilterChange={handleFilterChange} />
//       <div className="flex flex-wrap w-full min-h-[478px] h-auto px-[60px] py-[20px] place-content-center">
//         {filteredCards.map((card) => (
//           <Card
//           key={card._id}
//           img={card.img}
//           nombreCompleto={card.nombreCompleto}
//           correo={card.correo}
//           rol={card.rol}
//           _id={card._id}
          
//           />
//         ))}
//       </div>
//     </section>
//   );
// };
