import React from 'react';
import './SenctionHeader.css';
import { Header } from "../Header/Header";


export const SenctionHeader = () => {
    return (
        
        <div className="section1 bg-cover bg-center relative items-center h-[600px]">
            <Header/>
            <div className='flex justify-center py-20 place-content-center'>
                <div className='max-w-5xl mx-auto px-4 text-left ml-12'>
                    <h1 className='text-8xl font-bold text-white mb-4'>Que es nuestro CRM?</h1>
                    <p className='text-lg text-white mb-8 mt-16 text-[20px]'>Nuesto software CRM (Customer Relationship Management) o gestión de relaciones con clientes es una herramienta fundamental para las empresas de todos los tamaños. Te permite centralizar y gestionar de forma eficiente las interacciones con tus clientes potenciales, actuales y pasados.</p>
}
                </div>
            </div>
        </div>
    );
};