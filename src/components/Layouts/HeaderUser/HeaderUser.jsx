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

  return (
    <header className="w-full">
      <div className="navbar bg-[#EEEEEE]  bg-base-100 container mx-auto flex items-center justify-between rounded-lg shadow-md">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center">
          <div className="dropdown relative">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-lg z-[10] absolute top-full left-0 mt-2 w-52 p-2 shadow-lg"
              >
                <li><a href="#">Homepage</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">About</a></li>
              </ul>
            )}
          </div>
          <img src={logJhass} alt="Logo" className="h-10 w-14 ml-4" />
          <p className='self-center text-xl font-semibold whitespace-nowrap text-black ml-2'>Jhass</p>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <Navbar>
            <ul className="flex space-x-8 text-xl items-center">
              {navItems.map((item, index) => (
                <Item key={index} route={item.route} content={item.content} />
              ))}
            </ul>
          </Navbar>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center space-x-4">
          <button className="btn btn-ghost btn-circle">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div className='flex items-center cursor-pointer' onClick={handleLoginClick}>
            <img src={usuario} alt="Usuario" className="h-8 w-8 mr-2" />
            <h2 className="text-black text-[21px] font-Open-Sans">{username}</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderUser;
