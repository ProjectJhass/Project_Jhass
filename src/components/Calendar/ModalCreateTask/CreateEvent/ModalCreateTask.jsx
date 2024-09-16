import React, { useContext } from 'react';
import { AppContext } from '../../../Context/Context';

export const ModalCreateTask = ({ isOpen, onClose, handleAddEvent }) => {
  const { newEvent, setNewEvent } = useContext(AppContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg z-60">
        <h2 className="text-xl mb-4">Crear Nuevo Evento</h2>
        <input
          type="text"
          placeholder="Título"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="mb-2 p-2 border w-full"
        />
        <input
          type="datetime-local"
          placeholder="Inicio"
          value={newEvent.start}
          onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
          className="mb-2 p-2 border w-full"
        />
        <input
          type="datetime-local"
          placeholder="Fin"
          value={newEvent.end}
          onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
          className="mb-2 p-2 border w-full"
        />
        <input
          type="text"
          placeholder="Asignado a"
          value={newEvent.assignedTo}
          onChange={(e) => setNewEvent({ ...newEvent, assignedTo: e.target.value })}
          className="mb-2 p-2 border w-full"
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-4 bg-gray-300 p-2 rounded">Cancelar</button>
          <button onClick={handleAddEvent} className="bg-blue-500 text-white p-2 rounded">Agregar Evento</button>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateTask;
