import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logJhass from '../../../../public/logo2_jhass.png';
import usuario from '../../../assets/usuario.png';
import { Navbar } from '../../Navbar/Navbar';
import { Item } from '../../Item/Item';

export const HeaderUser = ({ username, navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Profile');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hasNavItems = navItems && navItems.length > 0;

  return (
    <header className="w-full">
      <div className="navbar bg-[#EEEEEE] bg-base-100 container mx-auto flex items-center justify-between rounded-lg shadow-md px-16 py-2 relative">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center space-x-4 lg:space-x-4">
          {/* Show menu hamburger on lg and smaller screens */}
          {hasNavItems && (
            <div className="dropdown relative lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              {isMenuOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white rounded-lg z-[10] absolute top-full left-0 mt-2 w-52 p-2 shadow-lg border border-gray-200"
                >
                  {navItems.map((item, index) => (
                    <Item key={index} route={item.route} content={item.content} />
                  ))}
                </ul>
              )}
            </div>
          )}
          <img src={logJhass} alt="Logo" className="h-10 w-14" />
          <p className='text-xl font-semibold whitespace-nowrap text-black ml-2'>Jhass</p>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex flex-grow justify-center">
          <Navbar>
            <ul className="flex space-x-8 text-xl items-center">
              {navItems && navItems.map((item, index) => (
                <Item key={index} route={item.route} content={item.content} />
              ))}
            </ul>
          </Navbar>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center space-x-4">
          {/* User Profile */}
          <div className="flex items-center cursor-pointer" onClick={handleLoginClick}>
            <img src={usuario} alt="Usuario" className="h-8 w-8 mr-2" />
            <h2 className="text-black text-[21px] font-Open-Sans hidden sm:block">{username}</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderUser;
