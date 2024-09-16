import React, { useContext, useState } from 'react';
import CreateSaleModal from '../Sales/CreateSaleForm/CreateSaleForm';
import { FaTrashAlt, FaFilter } from "react-icons/fa"; // Importa los íconos
import Modal from 'react-modal';
import HeaderUser from '../Layouts/HeaderUser/HeaderUser';
import { AppContext } from '../Context/Context';
import { Footer } from '../Layouts/Footer/Footer';

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Ventas = () => {
    const {user} =useContext(AppContext);

    const navItemstock = [
        { route: "/Cale", content: "Calendario" },
        { route: "/Rol", content: "Roles" },
        { route: "/Stock", content: "Productos" }
      ];
  const [salesData, setSalesData] = useState([
    { product: "PC Apple iMac 27”", quantity: 1, unitPrice: 2000, totalPrice: 2000 },
    { product: "Apple iPhone 14", quantity: 2, unitPrice: 1200, totalPrice: 2400 },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [saleToDelete, setSaleToDelete] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false); // Estado para controlar el menú desplegable

  const openModal = (saleIndex) => {
    setSaleToDelete(saleIndex);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSaleToDelete(null);
  };

  const confirmDelete = () => {
    if (saleToDelete !== null) {
      setSalesData(salesData.filter((_, index) => index !== saleToDelete));
      closeModal();
    }
  };

  const addSale = (newSale) => {
    setSalesData([...salesData, newSale]);
  };

  // Función para manejar el cambio de filtro desde el dropdown
  const handleFilterClick = (product) => {
    if (product === "Todos los productos") {
      setFilterText(""); // Restablecer el filtro si selecciona "Todos los productos"
    } else {
      setFilterText(product);
    }
    setShowFilterDropdown(false); // Cerrar el menú desplegable tras seleccionar un producto
  };

  const filteredSales = salesData.filter((sale) =>
    sale.product.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
    <HeaderUser 
    username={user ? `${user.nombre} ${user.apellido}` : "Usuario"} 
    navItems={navItemstock}/>
    <div className=" mx-10 p-4">
     
      <CreateSaleModal addSale={addSale} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Confirmar Eliminación"
        >
        <h2 className="text-xl font-semibold mb-4">¿Desea eliminar la venta?</h2>
        <div className="flex justify-evenly space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={confirmDelete}>
            Confirmar
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700" onClick={closeModal}>
            Cancelar
          </button>
        </div>
      </Modal>

      <div className={`relative overflow-y-auto shadow-md sm:rounded-lg mt-4 ${filteredSales.length > 6 ? 'max-h-[30rem]' : ''}`}>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs uppercase bg-[#EEEEEE] text-black">
            <tr className="sticky top-0 bg-[#EEEEEE] z-10">
              <th scope="col" className="px-6 py-3">Producto</th>
              <th scope="col" className="px-6 py-3">Cantidad</th>
              <th scope="col" className="px-6 py-3">Precio Unitario</th>
              <th scope="col" className="px-6 py-3">Precio Total</th>
              <th scope="col" className="px-6 py-3 relative">
                {/* Icono de filtro */}
                <FaFilter 
                  className="text-lg cursor-pointer" 
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)} 
                  />
                {showFilterDropdown && (
                    <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg" style={{ left: '-50px' }}> {/* Ajuste a la izquierda */}
                    <ul>
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleFilterClick("Todos los productos")}
                        >
                        Todos los productos
                      </li>
                      {salesData.map((sale, index) => (
                          <li
                          key={index}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => handleFilterClick(sale.product)}
                          >
                          {sale.product}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredSales.map((item, index) => (
                <tr
                key={index}
                className="relative bg-white shadow-sm hover:shadow-md transition-shadow duration-200 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent"
                >
                <td className="px-6 py-4 font-medium text-black whitespace-nowrap">
                  {item.product}
                </td>
                <td className="px-6 py-4 text-black">{item.quantity}</td>
                <td className="px-6 py-4 text-black">${item.unitPrice.toFixed(2)}</td>
                <td className="px-6 py-4 text-black">${item.totalPrice.toFixed(2)}</td>
                <td className="px-6 py-4 text-black">
                  <FaTrashAlt className="text-4xl cursor-pointer pr-4" onClick={() => openModal(index)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
            </>
  );
};

export default Ventas;
