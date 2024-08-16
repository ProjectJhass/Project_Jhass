import React from 'react';

export const Card = ({ img, title, description }) => {
  return (
    <div className="bg-white border border-black   max-w-sm flex flex-col h-[425px]">
    <div className="flex h-48 w-full overflow-hidden place-content-center bg-[#C4C4C4] border-black  border-b-[1px]">
      <img src={img} alt={title} className="object-cover w-[200px]" />
    </div>
    <div className=" flex p-6 text-center flex-col items-center h-[232px]">
      <h3 className="text-xl w-[200px] font-semibold mb-2 font-Open-Sans">{title}</h3>
      <p  className=' font-Open-Sans'>{description}</p>
    </div>
  </div>
  );
};
    