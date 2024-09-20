import React, { useState, useContext } from 'react';
import { AppContext } from '../../../Context/Context';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Asegúrate de importar los estilos de react-datepicker
import TimePicker from 'react-time-picker'; // Importamos el TimePicker
import 'react-time-picker/dist/TimePicker.css'; // Estilos del time picker
import { InfoModal, ErrorModal } from '../../../ModalReusable/ModalReusable'; // Usa los modales personalizados que creaste

export const ModalCreateTask = ({ isOpen, onClose, handleAddEvent }) => {
  const { newEvent, setNewEvent } = useContext(AppContext);
  const [startDate, setStartDate] = useState(null);  // Estado para la fecha de inicio
  const [startTime, setStartTime] = useState('');    // Estado para la hora de inicio
  const [endDate, setEndDate] = useState(null);      // Estado para la fecha de fin
  const [endTime, setEndTime] = useState('');        // Estado para la hora de fin
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Función para combinar la fecha y la hora en un solo valor
  const combineDateAndTime = (date, time) => {
    const [hours, minutes] = time.split(':');
    const combined = new Date(date);
    combined.setHours(hours);
    combined.setMinutes(minutes);
    return combined;
  };

  // Función que maneja la creación de eventos y las validaciones
  const handleCreateEvent = () => {
    if (!newEvent.title || !startDate || !startTime || !endDate || !endTime) {
      setErrorMessage('Todos los campos son obligatorios');
      setShowErrorModal(true);
      return;
    }

    // Combinar la fecha y la hora
    const startDateTime = combineDateAndTime(startDate, startTime);
    const endDateTime = combineDateAndTime(endDate, endTime);

    setNewEvent({
      ...newEvent,
      start: startDateTime.toISOString(),
      end: endDateTime.toISOString(),
    });

    handleAddEvent(); // Aquí agregamos el evento
    setShowInfoModal(true); // Mostrar modal de confirmación
    onClose(); // Cerrar el modal
  };

  if (!isOpen) return null;

  return (
    <>
      <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-60">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Crear Nuevo Evento</h2>

          <input
            type="text"
            placeholder="Título del Evento"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="mb-4 p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          />

          {/* Input de Fecha de Inicio y Hora de Inicio */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Fecha de Inicio</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="P"
                placeholderText="Fecha de Inicio"
                className="p-3 border rounded-lg w-full"
              />
            </div>

            <div>
              <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">Hora de Inicio</label>
              <TimePicker
                onChange={setStartTime}
                value={startTime}
                className="p-3 border rounded-lg w-full"
                clockIcon={true} // Mostrar icono del reloj
                disableClock={false} // Mostrar reloj en el selector
              />
            </div>
          </div>

          {/* Input de Fecha de Fin y Hora de Fin */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">Fecha de Fin</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="P"
                placeholderText="Fecha de Fin"
                className="p-3 border rounded-lg w-full"
              />
            </div>

            <div>
              <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">Hora de Fin</label>
              <TimePicker
                onChange={setEndTime}
                value={endTime}
                className="p-3 border rounded-lg w-full"
                clockIcon={true} // Mostrar icono del reloj
                disableClock={false} // Mostrar reloj en el selector
              />
            </div>
          </div>

          <input
            type="text"
            placeholder="Asignado a"
            value={newEvent.assignedTo}
            onChange={(e) => setNewEvent({ ...newEvent, assignedTo: e.target.value })}
            className="mb-4 p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex justify-end space-x-4">
            <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg">
              Cancelar
            </button>
            <button onClick={handleCreateEvent} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
              Agregar Evento
            </button>
          </div>
        </div>
      </div>

      {/* Modal de confirmación de evento creado */}
      <InfoModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        message="Evento creado con éxito"
      />

      {/* Modal de error */}
      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        message={errorMessage}
      />
    </>
  );
};

export default ModalCreateTask;
