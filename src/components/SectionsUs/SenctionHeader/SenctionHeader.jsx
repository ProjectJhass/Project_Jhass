import React from 'react';
import './SenctionHeader.css';

export const SenctionHeader = () => {
    return (
        <div className="section1 bg-cover bg-center relative h-[400px] md:h-[600px] flex items-center">
            <div className="px-4 text-left md:pl-[4rem] sm:pl-[2rem] flex flex-col justify-center h-full bg-[#00000015]">
                <h1 className="text-2xl font-bold text-white mb-3 font-serif w-auto 
                        md:text-6xl md:w-[800px] 
                        sm:text-3xl sm:w-full">
                    ¿Qué es nuestro CRM?
                </h1>
                <p className="text-sm text-white  mt-[10px] font-serif w-auto
                     lg:w-[800px] 
                        md:w-[35rem] md:text-base 
                        sm:w-full sm:text-sm">
                    Nuestro software CRM (Customer Relationship Management) o gestión de relaciones con clientes es una herramienta fundamental para las empresas de todos los tamaños. Te permite centralizar y gestionar de forma eficiente las interacciones con tus clientes potenciales, actuales y pasados.
                </p>
            </div>
        </div>
    );
};
