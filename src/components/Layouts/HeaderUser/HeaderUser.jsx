import React from 'react'
import { useNavigate, useRoutes } from 'react-router-dom';

import logJhass from '../../../../public/logo2_jhass.png'
import usuario from '../../../assets/usuario.png'
import { Navbar } from '../../Navbar/Navbar';
import { Item } from '../../Item/Item';





export const HeaderUser = ({ username, navItems }) => {

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
            <p className='self-center text-xl font-semibold whitespace-nowrap text-black '>Jhass</p>
          </div>
          <Navbar>
            <ul className="flex space-x-8 text-xl items-center">
              {
                navItems.map((item, index) => (
                  <Item key={index} route={item.route} content={item.content} />
                ))
              }
            </ul>
          </Navbar>
          <div className='flex items-center cursor-pointer' onClick={handleLoginClick} >
            <img src={usuario} alt="Logo" className="h-8 w-8 mr-[10px]" />
            <h2 className=" text-black text-[21px] font-Open-Sans">{username}</h2>
          </div>
        </div>
      </header>
    </>
  )
}
export default HeaderUser;