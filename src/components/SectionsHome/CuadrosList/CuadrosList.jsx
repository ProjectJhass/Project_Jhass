import React from 'react';

export const CuadrosList = ({ text, name, title, img }) => (
    <div className="flex flex-col justify-between md:flex-row bg-white rounded-lg shadow-md p-3 mb-4 border-2 border-blue-500">
        <div className="flex flex-col justify-center md:w-2/3 mb-1 md:mb-0 px-2">
            <p className="text-gray-700 italic text-xl mb-1 font-serif text-center">{text}</p>
            <p className="font-bold text-lg italic font-serif text-center">{title}</p>
        </div>
        <div className="md:w-1/5 flex items-center justify-center">
            <img src={img} alt={name} className="rounded-lg max-w-full h-auto" />
        </div>
    </div>
);
