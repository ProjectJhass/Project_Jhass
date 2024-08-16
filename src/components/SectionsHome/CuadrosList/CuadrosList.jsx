import React from 'react'

export const CuadrosList = ({ text, name, title, img }) => (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 mb-[5rem] border-2 border-blue-500">
      <div className="flex flex-col justify-center md:w-2/3 mb-4 md:mb-0 place-content-center px-[20px]">
        <p className="text-gray-700 italic  mb-4 font-serif text-center">{text}</p>
        {/* <p className="font-bold text-xl">{name}</p> */}
        <p className="font-bold text-xl italic font-serif text-center">{title}</p>
      </div>
      <div className="md:w-1/3 flex items-center justify-center">
        <img src={img} alt={name} className="rounded-lg max-w-full h-auto" />
      </div>
    </div>
  );
