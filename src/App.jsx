import React from 'react';
import HeaderUser from './Components/Header/Header';
import Sales from './Components/Sales/Sales';
import Footer from './Components/Layouts/Footer/Footer';

const navItems = [
  { route: '/home', content: 'Inicio' },
  { route: '/products', content: 'Productos' },
  { route: '/about', content: 'Sobre Nosotros' },
];

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <HeaderUser username="jhass" navItems={navItems} />
      </header>
      <main className="flex-grow px-6">
        <Sales />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
