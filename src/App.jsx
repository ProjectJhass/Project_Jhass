import React from 'react';
import HeaderUser from './Components/Header/Header'; // Ajusta la ruta según la ubicación del archivo
import Sales from './Components/Sales/Sales';
const navItems = [
  { route: '/home', content: 'Inicio' },
  { route: '/products', content: 'Productos' },
  { route: '/about', content: 'Sobre Nosotros' },
];

const App = () => {
  return (
    <div>
      <HeaderUser username="jhass" navItems={navItems} />
      <Sales />
    </div>
  );
};

export default App;
