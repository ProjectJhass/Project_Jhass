import React, { useContext, useEffect, useState } from 'react';
import { Card } from './Card';
import ModalTracking from '../employeeTracking/ModalTracking/ModalTracking';
import Modal from './Modal/Modal';
import { AppContext } from '../Context/Context';
import FilterTracking from '../employeeTracking/FilterTracking/FilterTracking';

export const Section = () => {
  const {
    cards,
    setCards,
    setIsModalOpen,
    setModalTrackingIsOpen,
    isModalOpen,
    ModalTrackingIsOpen,
    selectedCardId,
    setSelectedCardId,
  } = useContext(AppContext);


  const [nameFilter, setNameFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [filteredCards, setFilteredCards] = useState(cards);


  const uniqueRoles = [...new Set(cards.map((card) => card.rol))];


  const handleNameFilterChange = (filterValue) => {
    setNameFilter(filterValue);
  };

  
  const handleRoleFilterChange = (filterValue) => {
    setRoleFilter(filterValue);
  };

  useEffect(() => {
    const filtered = cards.filter(
      (card) =>
        card.nombreCompleto.toLowerCase().includes(nameFilter.toLowerCase()) &&
        card.rol.toLowerCase().includes(roleFilter.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [nameFilter, roleFilter, cards]);

  const handleEdit = (card) => {
    setSelectedCardId(card._id);
    setIsModalOpen(true);
  };

  const handleEditTracking = (card) => {
    setSelectedCardId(card._id);
    setModalTrackingIsOpen(true);
  };

  return (
    <section className="w-full h-auto">
      <div className="flex justify-between m-[20px] mt-[30px] place-content-center text-center">
        <h1 className="font-medium font-Open-Sans text-xl px-[39px]">Empleados</h1>
        <div className="flex">
          <FilterTracking
            onFilterChange={handleNameFilterChange}
            placeholder="Filtrar por nombre"
          />
          <FilterTracking
            onFilterChange={handleRoleFilterChange}
            placeholder="Filtrar por rol"
            options={uniqueRoles}
          />
        </div>
      </div>
      <section className="flex flex-wrap w-full min-h-[478px] h-auto px-[60px] py-[5px] place-content-center mb-[30px]">
        {filteredCards.map((card) => (
          <Card
            key={card._id}
            img={card.img}
            nombreCompleto={card.nombreCompleto}
            rol={card.rol}
            correo={card.correo}
            onEdit={() => handleEdit(card)}
            onEditT={() => handleEditTracking(card)}
            _id={card._id}
          />
        ))}
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onSave={(updatedCards) => setCards(updatedCards)}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        {ModalTrackingIsOpen && (
          <ModalTracking
            isOpenTracking={ModalTrackingIsOpen}
            onSave={(updatedCards) => setCards(updatedCards)}
            onClose={() => setModalTrackingIsOpen(false)}
          />
        )}
      </section>
    </section>
  );
};
