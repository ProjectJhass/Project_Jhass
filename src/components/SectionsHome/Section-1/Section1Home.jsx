import React from 'react';


import { AppContext } from '../../Context/Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';




export const Section1Home = () => {
    const NewContext = useContext(AppContext);
    const navigate =useNavigate();

    const handleRegisterClick = () => {

        navigate('/Registro')
    }
    const handleOpaqueClick = () => {
        NewContext.setisOpaque(!NewContext.isOpaque)
      }
      


    return (
        <>
            <div className='flex   h-[650px] section1 bg-cover bg-center relative w-full ' style={{ backgroundImage: "url('../../../../public/img-home.jpg')" }}>
                <div className='w-full py-[150px] px-4 text-left pl-[6rem] h-[650px] bg-[#000000ab]'>
                    <h1 className='text-7xl font-bold text-white mb-4 font-Open-Sans w-[800px]'>JHASS: Potencia las relaciones internas de tu empresa</h1>
                    <p className='text-lg text-white mb-8 mt-16 font-Open-Sans w-[50rem]'>JHASS es el CRM web diseñado para fortalecer la comunicación y colaboración entre tu empresa y tus empleados, mejorando la productividad y el bienestar laboral</p>
                    <div className='flex gap-4 w-[64rem] text-left pl-[20px]'>
                        <button className='bg-blue-500 hover:bg-[#0165FF] text-white py-4 px-6 rounded-lg mr-16 font-Open-Sans'>Más información</button>

                          <button className='bg-transparent border border-white text-white py-4 px-6 rounded-lg font-Open-Sans ' 
                          onClick={ ()=> {
                            handleRegisterClick();
                            handleOpaqueClick();}} >Regístrate</button>
 

                    </div>
                </div>
            </div>

            </>

    );
};





