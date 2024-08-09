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

    const handleOpaqueClick = () => {
        NewContext.setisOpaque(!NewContext.isOpaque);
    };

    return (
        <>
            <div className='flex h-[650px] section1 bg-cover bg-center relative w-full' style={{ backgroundImage: "url('../../../../public/img-home.jpg')" }}>
                <div className='w-full flex flex-col justify-center py-[150px] px-4 text-left pl-[6rem] h-[650px] bg-[#000000ab]'>
                    <h1 className='text-6xl font-bold text-white mb-3 font-serif w-[800px]'>Potencia las relaciones internas de tu empresa</h1>
                    <p className='text-xl text-white mb-8 mt- font-serif w-[50rem]'>  JHASS es el CRM web diseñado para fortalecer la comunicación y colaboración en tu empresa, mejorando la productividad y bienestar laboral. Proporciona herramientas innovadoras para optimizar procesos, gestionar tareas y mejorar la interacción entre equipos, creando un entorno eficiente y armonioso.
                    </p>
                    <div className='flex  w-[64rem] text-left mt-3'>
                        <button className='bg-blue-500 hover:bg-[#0165FF] text-white py-4 px-6 rounded-lg mr-12 text-lg'>Más información</button>
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
