import React, { useContext, useState, useEffect } from 'react';
import ProductCard from '../../SectionStock/ProductCard/ProductCard';
import Filter from '../../SectionStock/Filter/Filter';
import MyPieChart from '../../SectionStock/Grafica-Pastel/Grafica-pastel'; 
import MyColumnChart from '../../SectionStock/Grafica-Barras/Grafica-Barras';
import { Footer } from '../../Layouts/Footer/Footer';
import {CreateProductCard} from '../../SectionStock/CreateProduct/CreateProduct';
import { HeaderUser } from "../../Layouts/HeaderUser/HeaderUser";
import ConfirmationModal from '../../SectionStock/ConfirmationModal/ConfirmationModal';
import { AppContext } from '../../Context/Context';
import { POSTEndpoint, GETEndpoint } from '../../ServicesFectch/ServicesFetch';

export const Stock = () => {
  const navItemstock = [
    { route: "/Cale", content: "Calendario" },
    { route: "/Rol", content: "Roles" },
    { route: "/Stock", content: "Productos" }
  ];

  const { user,token } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [pieChartData, setPieChartData] = useState([['Producto', 'Cantidad']]);
  const [barChartData, setBarChartData] = useState([['Producto', 'Cantidad']]);

  // Obtener productos del servidor al cargar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await GETEndpoint({ URL: 'products', TokenGet: user.token });
      
      if (!data.error) {
        setProducts(data);
        setFilteredProducts(data);
        setPieChartData([
          ['Producto', 'Cantidad'],
          ...data.map(product => [product.name, product.quantity])
        ]);
        setBarChartData([
          ['Producto', 'Cantidad'],
          ...data.map(product => [product.name, product.quantity])
        ]);
      } else {
        console.error('Error fetching products:', data.error);
      }
    };

    fetchProducts();
  }, [user.token]);

  const handleFilterChange = (filter) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleCreateProduct = async (newProduct) => {
    const response = await POSTEndpoint({ URL: 'api/v1/product', Data: newProduct, TokenPost: token });

    if (!response.error) {
      const updatedProducts = [...products, response];
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
      setConfirmationMessage(`Producto "${response.name}" creado exitosamente.`);
      setIsConfirmationModalOpen(true);
    } else {
      setConfirmationMessage(`Error al crear el producto: ${response.error}`);
      setIsConfirmationModalOpen(true);
    }
  };

  const handleDeleteProduct = async (productName) => {
    // Aquí iría una llamada DELETEEndpoint si estuviera disponible
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
    setConfirmationMessage(`Producto "${productName}" eliminado exitosamente.`);
    setIsConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderUser navItems={navItemstock} username={user ? user.nombre + " " + user.apellido : "Usuario"} />
      
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-4">Bodega de Productos</h2>
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <CreateProductCard onCreate={handleCreateProduct} />
        {filteredProducts.map((product) => (
          <ProductCard key={product.name} product={product} onDelete={handleDeleteProduct} />
        ))}
      </div>
      <div className="mt-8 p-6 shadow-lg rounded-lg flex justify-evenly space-x-8">
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
      
      <Footer />

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onRequestClose={closeConfirmationModal}
        message={confirmationMessage}
      />
    </div>
  );
};
