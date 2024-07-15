import React, { useState } from 'react';
import img1 from '../../../src/assets/logo2_jhass.png';
// import { GeneralContext } from '../../../Context/Context';
import { Item } from '../Item/Item';
import { useNavigate, useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Help } from '../pages/Help/Help';
import { Nosotros } from '../pages/Nosotros/Nosotros';
import { Navbar } from '../Navbar/Navbar'; 
SectionRegister
import { SectionLogin } from "../SectionLogin/SectionLogin";
import { AppContext } from '../Context/Context';
import { useContext } from 'react';
import { SectionRegister } from '../SectionRegister/SectionRegister';



const AppRoutes = () => {
  let route = useRoutes ([
    {path: "/", element: <Home/>},
    {path: "/Nosotros", element: <Nosotros/>},
    {path: "/Ayuda", element: <Help/>},
    {path: "/Registro", element: <SectionRegister/>},
    {path: "/IniciarSesion", element: <SectionLogin/>},
    {path: "/Home", element: <Home/>}

  ]);
  return route;
}

export const Header = () => {
  const navigate =useNavigate();
  const NewContext = useContext(AppContext);

  const handleLoginClick = () => {

    navigate('/IniciarSesion')
}
 


const handleOpaqueClick = () => {
  NewContext.setisOpaque(!NewContext.isOpaque)
}

  return (
    <>
      <header  className={` place-content-center items-center absolute top-[17px] left-[71px] right-0 z-50 border-gray-200 px-4  py-2.5 bg-[#ffffff] rounded-xl shadow-md w-[90%] ${NewContext.isOpaque ? 'opacity-100' : 'opacity-0'}`}>
        
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src={img1}
                className="mr-3 h-6 sm:h-9"
                alt="Logo Jhass"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
                Jhass
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <button
                className="bg-[#0165FF] text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                onClick={ () => {
                    
                  handleLoginClick(); 
                  handleOpaqueClick();
                }}
                
              >
                Iniciar Sesión
              </button>

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <Navbar>
                <Item  route='/' content='Inicio' />
                <Item route='/Nosotros' content='Nosotros' />
                <Item route='/Ayuda' content='Ayuda' />
              </Navbar>
            </div>
          </div>
        
      </header>
      <AppRoutes />
    </>
  );
};