import React, { useContext, useState, useEffect } from 'react';
import ProductCard from '../../SectionStock/ProductCard/ProductCard';
import Filter from '../../SectionStock/Filter/Filter';
import MyPieChart from '../../SectionStock/Grafica-Pastel/Grafica-pastel'; 
import MyColumnChart from '../../SectionStock/Grafica-Barras/Grafica-Barras';
import { Footer } from '../../Layouts/Footer/Footer';
import  CreateProductCard  from '../../SectionStock/CreateProduct/CreateProduct';
import { HeaderUser } from "../../Layouts/HeaderUser/HeaderUser";
import ConfirmationModal from '../../SectionStock/ConfirmationModal/ConfirmationModal';
import { AppContext } from '../../Context/Context';
import { POSTEndpoint, GETEndpoint } from '../../ServicesFectch/ServicesFetch';
import GraficaL from '../../SectionStock/Recharts/Recharts'; // Importa el componente de gráfico de líneas
import { products as initialProducts } from '../../SectionStock/Card/Card';

export const Stock = () => {
  const {user} =useContext(AppContext);
  const navItemstock = [
    { route: "/Cale", content: "Calendario" },
    { route: "/Rol", content: "Roles" },
    { route: "/Stock", content: "Productos" }
  ];
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [pieChartData, setPieChartData] = useState([
    ['Producto', 'Cantidad'],
    ...initialProducts.map(product => [product.name, product.quantity])
  ]);
  const [barChartData, setBarChartData] = useState([
    ['Producto', 'Cantidad'],
    ...initialProducts.map(product => [product.name, product.quantity])
  ]);

  // Nueva configuración para los datos del gráfico de líneas
  const [lineChartData, setLineChartData] = useState([
    { name: 'Producto A', uv: 4000, pv: 2400 },
    ...initialProducts.map((product, index) => ({
      name: product.name,
      uv: product.quantity * 10, // Ejemplo de cálculo de datos
      pv: product.quantity * 20 // Ejemplo de cálculo de datos
    })),
  ]);

  const handleFilterChange = (filter) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleCreateProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    setPieChartData([
      ['Producto', 'Cantidad'],
      ...updatedProducts.map(product => [product.name, product.quantity])
    ]);
    setBarChartData([
      ['Producto', 'Cantidad'],
      ...updatedProducts.map(product => [product.name, product.quantity])
    ]);
    // Actualiza también los datos del gráfico de líneas
    setLineChartData([
      { name: 'Producto A', uv: 4000, pv: 2400 },
      ...updatedProducts.map((product, index) => ({
        name: product.name,
        uv: product.quantity * 10,
        pv: product.quantity * 20,
      })),
    ]);
    setConfirmationMessage(`Producto "${newProduct.name}" creado exitosamente.`);
    setIsConfirmationModalOpen(true);
  };

  const handleDeleteProduct = (productName) => {
    const updatedProducts = products.filter(product => product.name !== productName);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    setPieChartData([
      ['Producto', 'Cantidad'],
      ...updatedProducts.map(product => [product.name, product.quantity])
    ]);
    setBarChartData([
      ['Producto', 'Cantidad'],
      ...updatedProducts.map(product => [product.name, product.quantity])
    ]);
    // Actualiza también los datos del gráfico de líneas
    setLineChartData([
      { name: 'Producto A', uv: 4000, pv: 2400 },
      ...updatedProducts.map((product, index) => ({
        name: product.name,
        uv: product.quantity * 10,
        pv: product.quantity * 20,
      })),
    ]);
    setConfirmationMessage(`Producto "${productName}" eliminado exitosamente.`);
    setIsConfirmationModalOpen(true);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    setPieChartData([
      ['Producto', 'Cantidad'],
      ...updatedProducts.map(product => [product.name, product.quantity])
    ]);
    setBarChartData([
      ['Producto', 'Cantidad'],
      ...updatedProducts.map(product => [product.name, product.quantity])
    ]);
    // Actualiza también los datos del gráfico de líneas
    setLineChartData([
      { name: 'Producto A', uv: 4000, pv: 2400 },
      ...updatedProducts.map((product, index) => ({
        name: product.name,
        uv: product.quantity * 10,
        pv: product.quantity * 20,
      })),
    ]);
  };

  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
    <HeaderUser 
        username={user ? `${user.nombre} ${user.apellido}` : "Usuario"} 
        navItems={navItemstock}/>
    
    <div className="flex justify-between">
      <h2 className="text-lg font-semibold mb-4">Bodega de Productos</h2>
      <Filter onFilterChange={handleFilterChange} />
    </div>
    <div className="grid grid-cols-4 gap-4">
      <CreateProductCard onCreate={handleCreateProduct} />
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={handleDeleteProduct}
          onUpdate={handleUpdateProduct}
        />
      ))}
    </div>
    <div className="mt-8 p-6 shadow-lg rounded-lg space-y-8">
{/* Contenedor de las gráficas de pastel y barras en una sola fila */}
<div className="flex justify-evenly space-x-8">
  <div className="w-1/2 p-4">
    <div className="p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Gráfica de Pastel</h2>
      <MyPieChart data={pieChartData} />
    </div>
  </div>
  <div className="w-1/2 p-4">
    <div className="p-4 bg-white rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Gráfica de Barras</h2>
      <MyColumnChart data={barChartData} />
    </div>
  </div>
</div>

{/* Nueva sección de gráfico de líneas debajo de las otras gráficas */}
<div className="w-full p-4">
  <div className="p-4 bg-white rounded-lg">
    <h2 className="text-lg font-semibold mb-4">Gráfica de Líneas</h2>
    <GraficaL data={lineChartData} />
  </div>
</div>
</div>

    
    <Footer />

    <ConfirmationModal
      isOpen={isConfirmationModalOpen}
      onRequestClose={closeConfirmationModal}
      message={confirmationMessage}
    />
  </div>
  );
};
