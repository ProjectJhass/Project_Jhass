import React, { useState } from 'react';
import CreateSaleModal from '../CreateSalesForm/CreateSaleForm'; // Asegúrate de que el nombre del archivo sea correcto

const Ventas = () => {
  const [salesData, setSalesData] = useState([
    {
      product: "PC Apple iMac 27”",
      quantity: 1,
      unitPrice: 2000,
      totalPrice: 2000,
    },
    {
      product: "Apple iPhone 14",
      quantity: 2,
      unitPrice: 1200,
      totalPrice: 2400,
    },
  ]);

  // Función para agregar una nueva venta
  const addSale = (newSale) => {
    setSalesData([...salesData, newSale]);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Modal para crear nueva venta */}
      <CreateSaleModal addSale={addSale} />

      {/* Tabla de ventas */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Producto</th>
              <th scope="col" className="px-6 py-3">Cantidad</th>
              <th scope="col" className="px-6 py-3">Precio Unitario</th>
              <th scope="col" className="px-6 py-3">Precio Total</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.product}
                </td>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">${item.unitPrice.toFixed(2)}</td>
                <td className="px-6 py-4">${item.totalPrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ventas;
