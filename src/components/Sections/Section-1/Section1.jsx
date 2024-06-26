import React from 'react';
import { Header } from '../../Layouts/Header/Header';
import './Section1.css';

export const Section1 = () => {
    return (
        <div className="section1 bg-cover bg-center relative">
            <Header />
            <div className='flex justify-center py-20'>
                <div className='max-w-5xl mx-auto px-4 text-left ml-12'>
                    <h1 className='text-8xl font-bold text-white mb-4'>JHASS: Potencia las relaciones internas de tu empresa</h1>
                    <p className='text-lg text-white mb-8 mt-16'>JHASS es el CRM web diseñado para fortalecer la comunicación y colaboración entre tu empresa y tus empleados, mejorando la productividad y el bienestar laboral</p>
                    <div className='flex gap-4 justify-center '>
                        <button className='bg-blue-500 hover:bg-[#0165FF] text-white py-4 px-6 rounded-lg mr-16 '>Más información</button>
                        <button className='bg-transparent border border-white text-white py-4 px-6 rounded-lg '>Regístrate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};





