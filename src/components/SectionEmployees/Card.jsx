import React, { useState } from 'react';

export const Card = ({ rol, nombreCompleto, correo, onEdit, onEditT, _id }) => {
  const [stateRol, setStateRol] = useState(false);

  // Toggle role state
  const handleRolClick = () => {
    setStateRol((prevState) => !prevState);
  };

  // Function to map ranking to roles
  const getRoleByRanking = (ranking) => {
    switch (ranking) {
      case 1:
        return 'Empleado';
      case 2:
        return 'Administrador';
      case 3:
        return 'Supervisor';
      default:
        return 'no definido';
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <dl>
              <dt className="text-sm font-medium text-gray-600">Nombre</dt>
              <dd className="text-lg font-semibold text-gray-900 truncate">{nombreCompleto}</dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-600">Correo</dt>
              <dd className="text-lg font-semibold text-gray-900 truncate">{correo}</dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-600">Rol</dt>
              <dd className="text-lg font-semibold text-gray-900 truncate">
                {getRoleByRanking(rol)}
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-600">Estado</dt>
              <dd className={`text-lg font-semibold ${stateRol ? 'text-green-700' : 'text-gray-500'}`}>
                {stateRol ? 'Activado' : 'Desactivado'}
              </dd>
            </dl>
          </div>
        </div>

        <div className="w-full flex justify-center lg:w-auto gap-4 mt-4">
          <button 
            className="text-white text-[16px] sm:text-[18px] rounded-full w-[2.3rem] h-[2.3rem] flex items-center justify-center bg-green-500 hover:bg-green-600 hover:rounded-lg hover:w-[8rem] hover:h-[2.3rem] transition-all duration-300 font-Open-Sans overflow-hidden" 
            onClick={onEditT}
          >
            <span className="opacity-0 hover:opacity-100 transition-opacity duration-300 py-[10px] px-[30px]">Reporte</span>
          </button>
          <button 
            className="bg-blue-500 text-white text-[16px] sm:text-[18px] rounded-full w-[2.3rem] h-[2.3rem] flex items-center justify-center hover:rounded-lg hover:w-[8rem] hover:h-[2.3rem] transition-all duration-300 hover:bg-[#0165FF] font-Open-Sans overflow-hidden" 
            onClick={onEdit}
          >
            <span className="opacity-0 hover:opacity-100 transition-opacity duration-300 py-[10px] px-[23px]">Editar Rol</span>
          </button>
          <button 
            className={`text-white text-[16px] sm:text-[18px] rounded-full w-[2.3rem] h-[2.3rem] flex items-center justify-center hover:rounded-lg hover:w-[8rem] hover:h-[2.3rem] transition-all duration-300 font-Open-Sans overflow-hidden ${stateRol ? 'bg-gray-500 hover:bg-gray-600' : 'bg-green-500 hover:bg-green-600'}`} 
            onClick={handleRolClick}
          >
            <span className="opacity-0 hover:opacity-100 transition-opacity duration-300 py-[10px] px-[30px]">
              {stateRol ? 'Desactivar' : 'Activar'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
