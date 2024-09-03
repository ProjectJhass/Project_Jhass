import React from 'react'; // Importación correcta
import { useContext, useEffect, useState } from "react";
import { AppContext } from '../../../Context/Context';
import { GETEndpoint, POSTEndpoint } from '../../../ServicesFectch/ServicesFetch'; 
import { InputDate } from '../InputDate/InputDate'; 

export const ModalCreateEven = ({ isOpen, onClose }) => {
  const { token } = useContext(AppContext);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
    assignedTo: ''
  });

  useEffect(() => {
    if (isOpen) {
      fetchUsers();
    }
  }, [isOpen]);

  const fetchUsers = async () => {
    try {
      const response = await GETEndpoint({ URL: 'api/v1/usuario', TokenGet: token });
      if (response.error) {
        setError(response.error);
      } else {
        setUsers(response);
      }
    } catch (error) {
      setError('Error al obtener los usuarios');
    }
  };

  const handleAddEvent = async () => {
    try {
      const eventData = {
        title: newEvent.title,
        start: newEvent.start,
        end: newEvent.end,
        assignedTo: newEvent.assignedTo
      };
      const response = await POSTEndpoint({ URL: 'events', Data: eventData, TokenPost: token });
      if (response.error) {
        setError(response.error);
      } else {
        // Clear form and close modal
        setNewEvent({ title: '', start: '', end: '', assignedTo: '' });
        onClose();
      }
    } catch (error) {
      setError('Error al agregar el evento');
    }
  };

  // Maneja el cambio de fechas
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      start: start ? start.toISOString() : '',
      end: end ? end.toISOString() : ''
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg z-60 max-w-lg w-full">
        <h2 className="text-2xl mb-4 font-semibold">Crear Nuevo Evento</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
          <input
            id="title"
            type="text"
            placeholder="Título del Evento"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        {/* Componente InputDate para seleccionar las fechas */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Fechas del Evento</label>
          <InputDate onDateChange={handleDateChange} />
        </div>

        <div className="mb-4">
          <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">Asignar a</label>
          <select
            id="assignedTo"
            value={newEvent.assignedTo}
            onChange={(e) => setNewEvent({ ...newEvent, assignedTo: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          >
            <option value="">Selecciona un Usuario</option>
            {users.map(user => (
              <option key={user.id_usuario} value={user.id_usuario}>
                {user.nombre} {user.apellido}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400">Cancelar</button>
          <button onClick={handleAddEvent} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Agregar Evento</button>
        </div>
      </div>
    </div>
  );
};
