import React, { useState } from 'react';

export const ModalCreateTask = ({ isOpen, onClose, handleAddEvent }) => {
  const [newTask, setNewTask] = useState({
    title: '',
    start: '',
    end: '',
    assignedTo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    handleAddEvent(newTask); // Enviar la nueva tarea al calendario
    onClose(); // Cerrar el modal después de agregar la tarea
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className=" bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Crear Nuevo Evento</h2>
        <input
          type="text"
          name="title"
          placeholder="Título del evento"
          value={newTask.title}
          onChange={handleInputChange}
          className="border p-2 w-full mb-4"
        />
        <input
          type="datetime-local"
          name="start"
          value={newTask.start}
          onChange={handleInputChange}
          className="border p-2 w-full mb-4"
        />
        <input
          type="datetime-local"
          name="end"
          value={newTask.end}
          onChange={handleInputChange}
          className="border p-2 w-full mb-4"
        />
        <input
          type="text"
          name="assignedTo"
          placeholder="Asignar a"
          value={newTask.assignedTo}
          onChange={handleInputChange}
          className="border p-2 w-full mb-4"
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 px-4 py-2 bg-red-500 text-white rounded">
            Cancelar
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
            Crear
          </button>
        </div>
      </div>
    </div>
  );
};
