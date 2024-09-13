import React, { useContext, useEffect, useState } from 'react';
import { Card } from './Card';
import ModalTracking from '../employeeTracking/ModalTracking/ModalTracking';
import Modal from './Modal/Modal';
import { AppContext } from '../Context/Context';
import FilterTracking from '../employeeTracking/FilterTracking/FilterTracking';
import { GETEndpoint } from '../ServicesFectch/ServicesFetch';

export const Section = () => {
  const {
    setIsModalOpen,
    setModalTrackingIsOpen,
    isModalOpen,
    ModalTrackingIsOpen,
    setSelectedCardId,
  } = useContext(AppContext);

  const [cards, setCards] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);
  const [uniqueRoles, setUniqueRoles] = useState([]);

  // Fetch cards from the API
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await GETEndpoint({ URL: 'api/v1/usuario' });
        if (Array.isArray(response)) {
          setCards(response);
        } else {
          console.error('Unexpected response format:', response);
        }
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  // Update unique roles whenever cards change
  useEffect(() => {
    const roles = [...new Set(cards.map((card) => card.rol || ''))];
    setUniqueRoles(roles);
  }, [cards]);

  // Update filtered cards whenever filters or cards change
  useEffect(() => {
    const filtered = cards.filter(
      (card) =>
        (card.nombreCompleto?.toLowerCase().includes(nameFilter.toLowerCase()) || '') &&
        (card.rol?.toLowerCase().includes(roleFilter.toLowerCase()) || '')
    );
    setFilteredCards(filtered);
  }, [nameFilter, roleFilter, cards]);

  const handleNameFilterChange = (filterValue) => {
    setNameFilter(filterValue);
  };

  const handleRoleFilterChange = (filterValue) => {
    setRoleFilter(filterValue);
  };

  const handleEdit = (card) => {
    setSelectedCardId(card._id);
    setIsModalOpen(true);
  };

  const handleEditTracking = (card) => {
    setSelectedCardId(card._id);
    setModalTrackingIsOpen(true);
  };

  console.log('Filtered Cards:', filteredCards);

  return (
    <section className="w-full h-auto">
      <div className="flex justify-between m-[20px] mt-[30px] place-content-center text-center flex-wrap">
        <h1 className="font-medium font-Open-Sans text-xl px-[39px]">Empleados</h1>
        <div className="flex px-[39px] md:px-[0px] mt-[10px]">
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
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <Card
              key={card._id}
              img={card.img || 'default_image_url'} // Set a default image if none provided
              nombreCompleto={card.nombreCompleto || 'Nombre no disponible'} // Default text if no name provided
              rol={card.rol || 'Rol no disponible'} // Default text if no role provided
              correo={card.correo || 'Correo no disponible'} // Default text if no email provided
              onEdit={() => handleEdit(card)}
              onEditT={() => handleEditTracking(card)}
              _id={card._id}
            />
          ))
        ) : (
          <p>No hay tarjetas para mostrar</p>
        )}
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onSave={(updatedCards) => setCards((prev) => [...prev, ...updatedCards])}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        {ModalTrackingIsOpen && (
          <ModalTracking
            isOpenTracking={ModalTrackingIsOpen}
            onSave={(updatedCards) => setCards((prev) => [...prev, ...updatedCards])}
            onClose={() => setModalTrackingIsOpen(false)}
          />
        )}
      </section>
    </section>
  );
};
