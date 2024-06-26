import React from 'react';

export const Functionalityform = () => {
  return (
    <section className='w-full  h-[600px] bg-[#000000b4] fixed backdrop-blur-sm top-[70px] place-content-center items-center hidden'>
      <form className='w-[570px] h-[470px] bg-[#D9D9D9] rounded-3xl px-8 py-6 flex flex-wrap justify-between'>
        <div className='w-full h-[10%] text-center'>
          <h2 className='font-bold text-2xl text-black'>Crear Rol</h2>
        </div>
        <div className='w-full md:w-1/2 pr-4'>
          <div className='flex flex-col mb-4'>
            <label htmlFor="nombre" className='flex flex-col'>Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder='Ej: Juan' required className='mb-2 p-2 border border-gray-300 rounded-md' />
            
            <label htmlFor="apellido" className='flex flex-col'>Apellido:</label>
            <input type="text" id="apellido" name="apellido" placeholder='Ej: Perez' required className='mb-2 p-2 border border-gray-300 rounded-md' />
            
            <label htmlFor="rol" className='flex flex-col'>Rol:</label>
            <input type="text" placeholder='Ej: Empleado' required className='mb-2 p-2 border border-gray-300 rounded-md' />
            
            <label htmlFor="foto" className='flex flex-col'>Foto:</label>
            <input type="file" id="foto" name="foto" accept='image/*' className='mb-2 p-2 border border-gray-300 rounded-md' />
          </div>
        </div>
        <div className='w-full md:w-1/2 pl-4'>
          <div className='flex flex-col mb-4'>
            <label htmlFor="correoElectronico" className='flex flex-col'>Correo Electrónico:</label>
            <input type="text" id="correoElectronico" name="correoElectronico" placeholder='Ej: Juan@gmail.com' required className='mb-2 p-2 border border-gray-300 rounded-md' />
            
            <label htmlFor="telefono" className='flex flex-col'>Teléfono:</label>
            <input type="text" id="telefono" name="telefono" placeholder='Ej: 3115679808' required className='mb-2 p-2 border border-gray-300 rounded-md' />
            
            <label htmlFor="estado" className='flex flex-col'>Estado:</label>
            <input type="text" id="estado" name="estado" placeholder='Ej: Activo o Desactivo' required className='mb-2 p-2 border border-gray-300 rounded-md' />
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-md mt-4'>
            Crear
          </button>
        </div>
      </form>
    </section>
  );
};