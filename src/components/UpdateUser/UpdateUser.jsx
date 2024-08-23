import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/Context';
import { UpdateOk } from '../UpdateOK/UpdateOk'; // Ajusta la ruta si es necesario

export const UpdateUser = () => {
  const { user, updateUser, closeUpdateModal, isSuccessModalOpen, closeSuccessModal } = useContext(AppContext);
  const [updatedData, setUpdatedData] = useState({
    nombre: user?.nombre || '',
    apellido: user?.apellido || '',
    correo: user?.correo || '',
    telefono: user?.telefono || '',
    edad: user?.edad || '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updatedData.password !== updatedData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    await updateUser(updatedData);
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
          <h2 className="text-xl font-semibold mb-6">Actualizar Datos del Usuario</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700">Información Personal</h3>
                <div className="mt-2">
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={updatedData.nombre}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700">Información Personal</h3>
                <div className="mt-2">
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={updatedData.apellido}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700">Información de Contacto</h3>
                <div className="mt-2">
                  <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={updatedData.correo}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700">Información de Contacto</h3>
                <div className="mt-2">
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    value={updatedData.telefono}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700">Actualizar Contraseña</h3>
                <div className="mt-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={updatedData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700">Confirmar Contraseña</h3>
                <div className="mt-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={updatedData.confirmPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="col-span-2 mb-4">
                <h3 className="text-sm font-semibold text-gray-700">Información Adicional</h3>
                <div className="mt-2">
                  <label htmlFor="edad" className="block text-sm font-medium text-gray-700">Edad</label>
                  <input
                    type="number"
                    id="edad"
                    name="edad"
                    value={updatedData.edad}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Actualizar
              </button>
              <button
                type="button"
                onClick={closeUpdateModal}
                className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
      {isSuccessModalOpen && <UpdateOk onClose={closeSuccessModal} />}
    </div>
  );
};
