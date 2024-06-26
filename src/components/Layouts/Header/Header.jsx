import React from 'react';
import img1 from '../../../images/Logo3.png';
import { Nav } from '../../Nav/Nav';
import { useRoutes } from 'react-router-dom';
import { Home } from '../../Pages/Home/Home';
import { NavRouterLink } from '../../NavRouterLink/NavRouterLink';


const AppRoutes=()=>{
  let routes= useRoutes([
    {path:"/Inicio", component: <Home/>},
  ]);
}
export const Header = () => {
  return (
    <header className="bg-[#EEEEEE] shadow-md mx-8  rounded-lg">
      <div className="container mx-auto flex items-center justify-evenly py-4 text-2xl">
        <div className="flex items-center">
          <img src={img1} alt="Logo" className="h-10 w-14 " />
        </div>
          <Nav>
            <NavRouterLink routes={'/Inicio'} content={'Inicio'}/>


          </Nav>
        <div>
          <button className="bg-blue-500 text-white text-xl rounded-lg px-0.5 py-0.5 hover:bg-[#0165FF]">Iniciar Sesión</button>
        </div>
      </div>
    </header>
  );
};
