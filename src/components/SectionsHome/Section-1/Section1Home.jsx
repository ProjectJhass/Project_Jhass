import React from 'react';
import { useRoutes } from 'react-router-dom';
createAccount
import { Navbar } from '../../Navbar/Navbar';
import { Item } from '../../Item/Item';
import { createAccount } from '../../createAccount/createAccount';


Navbar



const AppRoutess = () => {
    let route = useRoutes ([
      {path: "/createAccount", element: <createAccount/>},

  
    ]);
    return route;
  }

export const Section1Home = () => {
    return (
        <>
            <div className='flex   h-[650px] section1 bg-cover bg-center relative w-full ' style={{ backgroundImage: "url('../../../../public/img-home.jpg')" }}>
                <div className='w-full py-[150px] px-4 text-left pl-[6rem] h-[650px] bg-[#000000ab]'>
                    <h1 className='text-7xl font-bold text-white mb-4 font-serif w-[800px]'>JHASS: Potencia las relaciones internas de tu empresa</h1>
                    <p className='text-lg text-white mb-8 mt-16 font-serif w-[50rem]'>JHASS es el CRM web diseñado para fortalecer la comunicación y colaboración entre tu empresa y tus empleados, mejorando la productividad y el bienestar laboral</p>
                    <div className='flex gap-4 w-[64rem] text-left pl-[20px]'>
                        <button className='bg-blue-500 hover:bg-[#0165FF] text-white py-4 px-6 rounded-lg mr-16 '>Más información</button>
                         <Item route='/createAccount' content='createAccount' >
                          <button className='bg-transparent border border-white text-white py-4 px-6 rounded-lg '>Regístrate</button>
                        </Item>

                    </div>
                </div>
            </div>
             <AppRoutess />
            </>

    );
};





