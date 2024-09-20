import React, { useContext, useState } from 'react';
import ProductCard from '../../SectionStock/ProductCard/ProductCard';
import Filter from '../../SectionStock/Filter/Filter';
import MyPieChart from '../../SectionStock/Grafica-Pastel/Grafica-pastel'; 
import MyColumnChart from '../../SectionStock/Grafica-Barras/Grafica-Barras';
import { Footer } from '../../Layouts/Footer/Footer';
import CreateProductCard from '../../SectionStock/CreateProduct/CreateProduct';
import { HeaderUser } from "../../Layouts/HeaderUser/HeaderUser";
import ConfirmationModal from '../../SectionStock/ConfirmationModal/ConfirmationModal';
import { AppContext } from '../../Context/Context';
import { products as initialProducts } from '../../SectionStock/Card/Card';
import GraficaL from '../../SectionStock/Recharts/Recharts';

export const Stock = () => {
  const { user } = useContext(AppContext);
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
  const [lineChartData, setLineChartData] = useState([
    { name: 'Producto A', uv: 4000, pv: 2400 },
    ...initialProducts.map((product) => ({
      name: product.name,
      uv: product.quantity * 10,
      pv: product.quantity * 20
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
    setLineChartData([
      { name: 'Producto A', uv: 4000, pv: 2400 },
      ...updatedProducts.map((product) => ({
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
    setLineChartData([
      { name: 'Producto A', uv: 4000, pv: 2400 },
      ...updatedProducts.map((product) => ({
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
    setLineChartData([
      { name: 'Producto A', uv: 4000, pv: 2400 },
      ...updatedProducts.map((product) => ({
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
    <>
      <HeaderUser 
          username={user ? `${user.nombre} ${user.apellido}` : "Usuario"} 
          navItems={navItemstock} />
      <div className="min-h-screen bg-white mx-12 mt-10">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-4">Bodega de Productos</h2>
          <div className="flex items-center">
            <Filter onFilterChange={handleFilterChange} />
            <CreateProductCard onCreate={handleCreateProduct} />
          </div>
        </div>
        
        <div className='shadow-md'>
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
    </>
  );
};
