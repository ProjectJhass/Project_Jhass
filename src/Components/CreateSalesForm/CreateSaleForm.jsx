import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Para accesibilidad

export const CreateSaleModal = ({ addSale }) => {
  const [formData, setFormData] = useState({
    id: '',  // ID único para cada venta
    product: '',
    quantity: 1,
    unitPrice: 0,
    totalPrice: 0,
  });

  const [isOpen, setIsOpen] = useState(false);

  // Abrir el modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Cerrar el modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === 'product' ? value : parseFloat(value) || 0;

    // Actualizar los datos del formulario y recalcular el precio total si se cambia cantidad o precio
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
      totalPrice: name === 'quantity' || name === 'unitPrice'
        ? (name === 'quantity' ? updatedValue : prevFormData.quantity) *
          (name === 'unitPrice' ? updatedValue : prevFormData.unitPrice)
        : prevFormData.totalPrice,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const saleWithId = {
      ...formData,
      id: Date.now(), // Generar un ID único para cada venta
    };
    addSale(saleWithId); // Añadir la venta a la lista de ventas
    closeModal(); // Cerrar el modal
    setFormData({ id: '', product: '', quantity: 1, unitPrice: 0, totalPrice: 0 }); // Limpiar el formulario
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button
        onClick={openModal}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Crear Nueva Venta
      </button>

      {/* Modal para crear una nueva venta */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Crear Nueva Venta"
        className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
        overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Crear Nueva Venta</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo de producto */}
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700">
              Producto
            </label>
            <input
              type="text"
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Campo de cantidad */}
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Cantidad
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              // min="1"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Campo de precio por unidad */}
          <div>
            <label htmlFor="unitPrice" className="block text-sm font-medium text-gray-700">
              Precio por Unidad
            </label>
            <input
              
              id="unitPrice"
              name="unitPrice"
              value={formData.unitPrice}
              onChange={handleChange}
              required
              min="0"
              // step="0.01"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Precio total (solo lectura) */}
          <div>
            <label htmlFor="totalPrice" className="block text-sm font-medium text-gray-700">
              Precio Total
            </label>
            <input
              type="number"
              id="totalPrice"
              name="totalPrice"
              value={formData.totalPrice}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Botones para enviar y cerrar */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Guardar Venta
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CreateSaleModal;
