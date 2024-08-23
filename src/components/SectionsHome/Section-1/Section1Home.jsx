import React from 'react';
import { AppContext } from '../../Context/Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Section1Home = () => {
    const NewContext = useContext(AppContext);
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/Registro');
    };

    const handleInfor = () => {
        navigate('/Nosotros');
    };

    const handleOpaqueClick = () => {
        NewContext.setisOpaque(!NewContext.isOpaque);
    };

    return (
        <>
            <div className='flex h-[650px] sm section1 bg-cover bg-center relative w-full' style={{ backgroundImage: "url('../../../../public/img-home.jpg')" }}>
                <div className='w-full flex flex-col justify-center py-[150px] px-4 text-left pl-[6rem] h-[650px] bg-[#000000ab]  
                    lg:pl-[6rem] 
                    md:pl-[4rem] md:py-[120px] 
                    sm:pl-[2rem] sm:py-[80px]'>
                    <h1 className='text-4xl font-bold text-white mb-3 font-serif w-[500px] 
                        md:text-6xl md:w-[800px] 
                        sm:text-3xl sm:w-full'>Potencia las relaciones internas de tu empresa</h1>
                    <p className='text-lg text-white mb-8 mt-[10px] font-serif w-[500px]
                     lg:w-[800px] 
                        md:w-[35rem] md:text-base 
                        sm:w-full sm:text-sm'>  JHASS es el CRM web diseñado para fortalecer la comunicación y colaboración en tu empresa, mejorando la productividad y bienestar laboral. Proporciona herramientas innovadoras para optimizar procesos, gestionar tareas y mejorar la interacción entre equipos, creando un entorno eficiente y armonioso.
                    </p>
                    <div className='flex  w-[500px] text-left mt-3 
                    lg:w-[48rem] 
                        md:w-[40rem] 
                         '>
                        <button onClick={handleInfor} className='bg-blue-500 hover:bg-[#0165FF] text-white py-4 px-6 rounded-lg mr-12 text-lg'>Más información</button>
                        <button className='bg-transparent border border-white text-white py-4 px-6 text-lg rounded-lg' 
                            onClick={() => {
                                handleRegisterClick();
                                handleOpaqueClick();
                            }}>Regístrate</button>
                    </div>
                </div>
            </div>
        </>
    );
};
