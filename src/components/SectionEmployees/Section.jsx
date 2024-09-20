import React, { useContext, useEffect, useState } from 'react';
import ModalTracking from '../employeeTracking/ModalTracking/ModalTracking';
import Modal from './Modal/Modal';
import { AppContext } from '../Context/Context';
import FilterTracking from '../employeeTracking/FilterTracking/FilterTracking';
import { GETEndpoint } from '../ServicesFectch/ServicesFetch';
import ModalReport from '../employeeTracking/ModalTracking/ModalReport';

export const Section = () => {
  const {
    user,
    setIsModalOpen,
    setModalTrackingIsOpen,
    isModalOpen,
    ModalTrackingIsOpen,
    setSelectedCardId,
  } = useContext(AppContext);

  const [users, setUsers] = useState([]); // Almacena los usuarios
  const [roleIds, setRoleIds] = useState([]); // Almacena solo los IDs de los roles
  const [nameFilter, setNameFilter] = useState(''); // Filtro por nombre
  const [filteredUsers, setFilteredUsers] = useState([]); // Usuarios filtrados

  // Obtener usuarios y roles
  const fetchData = async () => {
    try {
      const responseUsers = await GETEndpoint({ URL: 'api/v1/usuario' });
      const responseProfile = await GETEndpoint({ URL: `api/v1/profile/${user.id_usuario}` });

      console.log('Response Users:', responseUsers);
      console.log('Response Profile:', responseProfile);

      // Obtener IDs de roles para el usuario
      const rolesPromises = responseProfile.map(profile => 
        GETEndpoint({ URL: `api/v1/roles/${profile.roleId}` })
      );
      const responseRoles = await Promise.all(rolesPromises);
      const roleIds = responseRoles.map(role => role.id); // Extraer solo los IDs de los roles

      console.log('Role IDs:', roleIds); // Imprime los IDs de los roles

      setRoleIds(roleIds);
      setUsers(responseUsers);
      setFilteredUsers(responseUsers);
    } catch (error) {
      console.error('Error fetching users or roles:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filtrar usuarios por nombre
  useEffect(() => {
    const filtered = users.filter(
      user =>
        user.nombreCompleto?.toLowerCase().includes(nameFilter.toLowerCase()) || ''
    );
    setFilteredUsers(filtered);
  }, [nameFilter, users]);

  const handleNameFilterChange = (filterValue) => setNameFilter(filterValue);

  const handleEdit = (user) => {
    setSelectedCardId(user.id_usuario);
    setIsModalOpen(true);
  };

  return (
    <section className="w-full h-auto">
      <div className="flex justify-between m-[20px] mt-[30px] place-content-center text-center flex-wrap">
        <h1 className="font-medium font-Open-Sans text-xl px-[39px]">Empleados</h1>
        <div className="flex px-[39px] md:px-[0px] mt-[10px]">
          <FilterTracking onFilterChange={handleNameFilterChange} placeholder="Filtrar por nombre" />
          <button className="text-white text-[16px] sm:text-[18px] w-[7.3rem] h-[2.2rem] items-center flex rounded-md justify-center bg-blue-500 hover:bg-[#0165FF] font-Open-Sans overflow-hidden mt-[3px] mr-[30px]" onClick={() => setModalTrackingIsOpen(true)}>
            <span className="py-[10px] px-[30px]">Reporte</span>
          </button>
        </div>
      </div>
      <section className="flex flex-wrap w-full min-h-[478px] h-auto px-[60px] py-[5px] place-content-center mb-[30px]">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id_usuario} className="w-full mx-auto p-6 bg-white shadow-md">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-grow">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <dl>
                      <dt className="text-sm font-medium text-gray-600">Nombre</dt>
                      <dd className="text-lg font-semibold text-gray-900 truncate">{user.nombreCompleto || user.nombre}</dd>
                    </dl>
                    <dl>
                      <dt className="text-sm font-medium text-gray-600">Correo</dt>
                      <dd className="text-lg font-semibold text-gray-900 truncate">{user.correo}</dd>
                    </dl>
                    <dl>
                      <dt className="text-sm font-medium text-gray-600">ID Rol</dt>
                      <dd className="text-lg font-semibold text-gray-900 truncate">
                        {roleIds[user.roleId] || 'Rol desconocido'}
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="w-full flex justify-center lg:w-auto gap-4 mt-4">
                  <button className="bg-blue-500 text-white text-[16px] sm:text-[18px] rounded-full w-[2.3rem] h-[2.3rem] flex items-center justify-center hover:rounded-lg hover:w-[8rem] hover:h-[2.3rem] transition-all duration-300 hover:bg-[#0165FF] font-Open-Sans overflow-hidden" onClick={() => handleEdit(user)}>
                    <span className="opacity-0 hover:opacity-100 transition-opacity duration-300 py-[10px] px-[23px]">Editar Rol</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay usuarios para mostrar</p>
        )}
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onSave={(updatedUsers) => setUsers((prev) => [...prev, ...updatedUsers])} onClose={() => setIsModalOpen(false)} />
        )}
        {ModalTrackingIsOpen && (
          <ModalReport isOpenTracking={ModalTrackingIsOpen} onClose={() => setModalTrackingIsOpen(false)} />
        )}
      </section>
    </section>
  );
};
