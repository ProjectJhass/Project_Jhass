import React, { useContext, useEffect, useState } from 'react';
import { HeaderUser } from "../Layouts/HeaderUser/HeaderUser";
import { Footer } from '../Layouts/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/Context';
import EmptyState from "../../../public/empty.png";
import BuscadorIcon from "../../../public/buscar.png";
import { GETEndpoint } from '../ServicesFectch/ServicesFetch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { ModalPreCompany } from '../ModalPreCompany/ModalPreCompany';
import { InformativeModal } from '../InformativeModal/InformativeModal';

export const SectionPreCompany = () => {
  const navItems = [
    { route: "/Cale", content: "Calendario" },
    { route: "/Rol", content: "Roles" },
    { route: "/Stock", content: "Productos" }
  ];
  const navigate = useNavigate();
  const { user, token, isNewUser, setIsNewUser } = useContext(AppContext);
  const [contentGetCompanies, setContentGetCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showInformativeModal, setShowInformativeModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleButtonCreateCompany = () => navigate('/Empresa');

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCompany(null);
  };

  const closeInformativeModal = () => {
    setShowInformativeModal(false);
    setIsNewUser(false);
    localStorage.setItem('hasSeenInformativeModal', 'true');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleSearch = () => {
    // Aquí podrías realizar la lógica de búsqueda si es necesario
  };

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await GETEndpoint({ URL: "api/v1/companies", TokenGet: token });
        setContentGetCompanies(response);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, [token]);

  useEffect(() => {
    const hasSeenInformativeModal = localStorage.getItem('hasSeenInformativeModal');
    if (!hasSeenInformativeModal && isNewUser) {
      setShowInformativeModal(true);
    }
  }, [isNewUser]);

  const filteredCompanies = contentGetCompanies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedType === '' || company.type === selectedType)
  );

  const companyTypes = Array.from(new Set(contentGetCompanies.map(company => company.type)));

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderUser 
        navItems={null} 
        username={user ? `${user.nombre} ${user.apellido}` : "Usuario"} 
      />

      <main className="flex-grow flex flex-col px-12 py-4 sm:px-8 sm:py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Empresas</h1>
        </div>

        {/* Contenedor principal de la búsqueda y filtros */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          {/* Contenedor para el buscador */}
          <div className="flex-grow mb-4 sm:mb-0">
            <div className="relative w-full lg:w-3/4 xl:w-2/3"> {/* Ajusta el ancho en pantallas grandes */}
              <input
                type="text"
                placeholder="Buscar empresa..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 bg-blue-600 text-white hover:bg-blue-700 transition duration-200 rounded-r-lg border-none"
                onClick={handleSearch}
              >
                <img src={BuscadorIcon} alt="Buscar" className="w-6 h-6" />
              </button>
            </div>
          </div>


          {/* Contenedor para el botón Crear Empresa y filtro */}
          <div className="flex flex-row sm:items-center gap-4 justify-center text-center">
          {/* Botón Crear Empresa */}
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
              onClick={handleButtonCreateCompany}
            >
              Crear Empresa
            </button>
          </div>

          {/* Filtro desplegable */}
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos los tipos</option>
            {companyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        </div>

        <div className="flex flex-col w-full overflow-x-auto">
          {filteredCompanies.length > 0 ? (
            <div className="min-w-full bg-white shadow-md rounded-lg overflow-x-auto">
              <Table className="w-full">
                <TableHead className="bg-blue-200 h-12">
                  <TableRow>
                    <TableHeaderCell className="text-gray-800">Nombre Empresa</TableHeaderCell>
                    <TableHeaderCell className="text-gray-800">Correo Electrónico</TableHeaderCell>
                    <TableHeaderCell className="text-gray-800">Descripción</TableHeaderCell>
                    <TableHeaderCell className="text-gray-800">Tipo de Empresa</TableHeaderCell>
                    <TableHeaderCell className="text-gray-800">Sector de la Empresa</TableHeaderCell>
                    <TableHeaderCell className="text-gray-800">Dirección de la Empresa</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredCompanies.map((company) => (
                    <React.Fragment key={company.id_company}>
                      <TableRow
                        className="cursor-pointer hover:bg-blue-50"
                        onClick={() => handleCompanyClick(company)}
                        style={{ boxShadow: 'inset 0px -1px 0px 0px #e2e8f0' }}
                      >
                        <TableCell className="font-medium">{company.name}</TableCell>
                        <TableCell>{company.email}</TableCell>
                        <TableCell>{company.description}</TableCell>
                        <TableCell>{company.type}</TableCell>
                        <TableCell>{company.sector}</TableCell>
                        <TableCell>{company.address}</TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center mt-10">
              <img src={EmptyState} alt="No companies" className="w-32 h-32 sm:w-48 sm:h-48" />
              <p className="text-center text-gray-700 mt-4 text-lg">
                ¿No tienes una empresa?{' '}
                <button
                  className="text-blue-500 hover:underline font-semibold"
                  onClick={handleButtonCreateCompany}
                >
                  Crea una empresa
                </button>
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {isModalOpen && selectedCompany && (
        <ModalPreCompany
          User={user}
          Company={selectedCompany}
          onClose={closeModal}
        />
      )}

      {showInformativeModal && (
        <InformativeModal
          onClose={closeInformativeModal}
        />
      )}
    </div>
  );
};
