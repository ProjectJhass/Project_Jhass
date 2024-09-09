import React, { useState } from 'react';

// Datos iniciales
const initialSalesData = [
  {
    product: "PC Apple iMac 27”",
    quantity: 2,
    price: 2000, // Precio por unidad
  },
  {
    product: "Apple iPhone 14",
    quantity: 5,
    price: 1000,
  },
  {
    product: "Apple iPad Air",
    quantity: 3,
    price: 700,
  },
  {
    product: "Xbox Series X",
    quantity: 1,
    price: 500,
  },
  {
    product: "PlayStation 5 PRO",
    quantity: 2,
    price: 600,
  },
  {
    product: "MacBook Pro 16”",
    quantity: 4,
    price: 2500,
  },
  {
    product: "Apple Watch SE",
    quantity: 3,
    price: 400,
  },
  {
    product: "Microsoft Surface Pro",
    quantity: 2,
    price: 1200,
  },
  {
    product: "Beats Fit Pro - True Wireless",
    quantity: 5,
    price: 200,
  },
  {
    product: "Brother Printer HL-L32",
    quantity: 6,
    price: 150,
  },
];

const Sales = () => {
  const [salesData, setSalesData] = useState(initialSalesData);

  // Función para calcular el precio final basado en cantidad y precio unitario
  const calculateTotalPrice = (quantity, price) => {
    return quantity * price;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Producto</th>
              <th scope="col" className="px-6 py-3">Cantidad</th>
              <th scope="col" className="px-6 py-3">Precio por unidad</th>
              <th scope="col" className="px-6 py-3">Precio total</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.product}
                </th>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">${item.price}</td>
                <td className="px-6 py-4">${calculateTotalPrice(item.quantity, item.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
