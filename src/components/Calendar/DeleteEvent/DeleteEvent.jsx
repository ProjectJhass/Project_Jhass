import React, { useContext } from 'react';
import { AppContext } from '../../Context/Context';

const DeleteEventModal = () => {
  const {
    events,
    setEvents,
    deleteEventModal,
    setDeleteEventModal,
    eventToDelete
  } = useContext(AppContext);

  const handleDeleteEvent = () => {
    setEvents(events.filter(event => event !== eventToDelete));
    setDeleteEventModal(false); // Cierra el modal después de eliminar el evento
  };

  const handleClose = () => {
    setDeleteEventModal(false); // Cierra el modal sin eliminar el evento
  };

  if (!deleteEventModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg z-60 w-full max-w-md text-center">
        <p className="mb-4">¿Estás seguro de que deseas eliminar el evento "{eventToDelete.title}"?</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mr-4"
          onClick={handleDeleteEvent}
        >
          Eliminar
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={handleClose}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default DeleteEventModal;