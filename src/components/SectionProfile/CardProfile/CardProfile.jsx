import React from 'react';
import usuario from '../../../assets/usuario.png';

export const CardProfile = ({nombreCompleto, rol, img, onEdit}) => {
  return (
    <section className='w-full md:w-1/2 flex items-center justify-center p-4'>
      <div className='w-full max-w-[300px] h-[500px] flex flex-col items-center justify-center shadow-2xl rounded-2xl border border-blue-400'>
        <img src={usuario} alt="" className='w-[180px] rounded-full bg-slate-200' />
        <p className='font-Open-Sans text-[20px] py-[10px]'>{nombreCompleto}</p>
        <p className='font-Open-Sans text-[20px] pb-[10px]'>{rol}</p>
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-md mt-4 font-Open-Sans' onClick={onEdit}>
          Editar
        </button>
      </div>
    </section>
  );
};
