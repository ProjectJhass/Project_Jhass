import React from 'react'
import { useNavigate, useRoutes } from 'react-router-dom';

import logJhass from '../../../assets/logo2_jhass.png'
import usuario from '../../../assets/usuario.png'
import { Stock } from '../../pages/Stock/Stock';
import { Navbar } from '../../Navbar/Navbar';
import { Item } from '../../Item/Item';
Rol
import { Cale } from '../../Calendar/Calendar';
import { Rol } from '../../pages/Rol/Rol';
import { Profile } from '../../pages/Profile/Profile';
import { ModalConfirm } from '../../SectionEmployees/ModalConfirm/ModalConfirm';


Navbar
const AppRoutes = () => {
  let route = useRoutes([
    { path: "/", element: <Stock /> },
    { path: "/Rol", element: <Rol /> },
    { path: "/Cale", element: <Cale /> },
    { path: "/Profile", element: <Profile /> },
    { path: "/ModalConfirm", element: <ModalConfirm/> }

  ]);
  return route;
};

export const HeaderAdmin = () => {

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/Profile');
  };


  return (
    <>
    <header className="bg-[#EEEEEE]     w-full">
    <div className="container mx-auto flex items-center justify-evenly py-4 text-2xl">
      <div className="flex items-center">
      <img src={logJhass} alt="Logo" className="h-10 w-14 " />
      </div>
      <Navbar>
        <ul className="flex space-x-8 text-xl items-center">

              <Item route='/' content='Inventario' />
              <Item route='/Rol' content='Roles' />
              <Item route='/Cale' content='Calendario' />


        </ul>
      </Navbar>
      <div className='flex items-center cursor-pointer' onClick={handleLoginClick } >
      <img src={usuario} alt="Logo" className="h-8 w-8 mr-[10px]" />
        <h2 className=" text-black text-[21px] font-Open-Sans">Johan Sebastian Agudelo</h2>
      </div>
    </div>
  </header>
   <AppRoutes />
   </>
  )
}
export default HeaderAdmin;