import React, { useContext, useState } from 'react';
import { useNavigate, useRoutes, useLocation } from 'react-router-dom';
import { AppContext } from './components/Context/Context';
import { Navbar } from './components/Navbar/Navbar';
import { Item } from './components/Item/Item';
import { Home } from './components/pages/Home/Home';
import { Nosotros } from './components/pages/Nosotros/Nosotros';
import { Contact_us } from './components/pages/Contact_us/Contact_us';
import { SectionLogin } from './components/SectionLogin/SectionLogin';
import { SectionRegister } from './components/SectionRegister/SectionRegister';
import { SectionCompany } from './components/SectionCompany/SectionCompany';
import { SectionPreCompany } from './components/SectionPreCompany/SectionPreCompany';
import { UnionCompany } from './components/UnionCompany/UnionCompany';
import { Cale } from './components/Calendar/Calendar';
import { Rol } from './components/pages/Rol/Rol';
import { Stock } from './components/pages/Stock/Stock';
import Unauthorized from './components/Unauthorized/Unauthorized';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { EnterCodeVerification } from './components/EnterCodeVerification/EnterCodeVerification';
import { SectionCardN } from './components/SectionNews/SectionCardN/SectionCardN';


const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Nosotros", element: <Nosotros /> },
    { path: "/Contactanos", element: <Contact_us /> },
    { path: "/Registro", element: <SectionRegister /> },
    { path: "/IniciarSesion", element: <SectionLogin /> },
    { path: "/Home", element: <Home /> },
    { path: "/Empresa", element: <PrivateRoute element={<SectionCompany />} /> },
    { path: "/PreEmpresa", element: <SectionPreCompany /> },
    { path: "/NoAutorizado", element: <Unauthorized /> },
    { path: "/Unirse_Empresa", element: <UnionCompany /> },
    { path: "/Cale", element: <Cale /> },
    { path: "/Rol", element: <Rol /> },
    { path: "/Stock", element: <Stock /> },
    { path: "/VerificationCode", element: <EnterCodeVerification /> },
    { path: "/News", element: <SectionCardN /> },

  ]);
}

function App() {
  const navigate = useNavigate();
  const NewContext = useContext(AppContext);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginClick = () => {
    navigate('/IniciarSesion');
    handleOpaqueClick();
  }

  const handleOpaqueClick = () => {
    NewContext.setisOpaque(!NewContext.isOpaque);
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const routesWithNav = ['/', '/Nosotros', '/Contactanos', '/Home'];

  return (
    <>
      {routesWithNav.includes(location.pathname) && (
        <header className={`absolute top-[17px] left-1/2 transform -translate-x-1/2 z-50 border-gray-200 px-4 py-2.5 bg-[#ffffff] rounded-xl shadow-md w-[90%] ${NewContext.isOpaque ? 'opacity-100' : 'opacity-100'}`}>
          <div className="flex justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450502/ContentImagesJhass/ez6egg6salvkg3n6q8xt.png" className="mr-3 h-6 sm:h-9" alt="Logo Jhass" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-black">Jhass</span>
            </a>
            <div className="flex items-center lg:order-2">
              <button
                className="bg-[#0165FF] text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base w-32 lg:w-32 py-2 lg:py-2.5 flex items-center justify-center dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                onClick={handleLoginClick}
              >
                Iniciar Sesión
              </button>

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={handleMenuToggle}
              >
                <span className="sr-only">Open main menu</span>
                <svg className={`${isMenuOpen ? "hidden" : "block"} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
                <svg className={`${isMenuOpen ? "block" : "hidden"} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div className={`${
                isMenuOpen ? "flex" : "hidden"
              } lg:flex lg:justify-center items-center absolute lg:relative flex-col space-x-4 w-full transition duration-300 ease-in-out transform lg:transform-none`} id="mobile-menu-2">
              <Navbar>
                <Item route='/' content='Inicio' />
                <hr className='bg-black' />
                <Item route='/Nosotros' content='Nosotros' />
                <hr className='bg-black' />
                <Item route='/Contactanos' content='Contáctanos' />
                <hr className='bg-black' />
              </Navbar>
            </div>
          </div>
        </header>
      )}
      <AppRoutes />
    </>
  );
}

export default App;
