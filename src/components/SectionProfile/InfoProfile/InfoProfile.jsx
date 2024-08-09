import React from 'react';

export const InfoProfile = ({ img, nombre, rol, telefono, correo }) => {
  return (
    <div className='w-full md:w-1/2 h-auto md:h-[500px] flex items-center justify-center p-4'>
      <div className='w-full max-w-[500px] h-auto md:h-[500px] flex items-center flex-col'>
        <div className='w-full'>
          <h3 className='font-Open-Sans text-[20px] py-[10px]'>{nombre}</h3>
          <p className='font-Open-Sans text-[20px] pb-[10px]'>Empresa</p>
          <hr className='border-gray-400' />
        </div>
        <div className='w-full mt-[20px]'>
          <div className='w-[200px]'>
            <h2 className='font-Open-Sans text-[20px] pt-[10px] pb-[2px]'>Información personal</h2>
            <hr className='border-gray-400' />
          </div>
          <div className='flex'>
            <div className='flex pt-[20px] flex-col mr-[5px]'>
              <p className='font-Open-Sans text-[17px] pb-[10px] pr-[5px]'>Teléfono:</p>
              <p className='font-Open-Sans text-[17px] pb-[10px] pr-[5px]'>Correo:</p>
              <p className='font-Open-Sans text-[17px] pb-[10px] pr-[5px]'>Rol:</p>
            </div>
            <div className='flex pt-[20px] flex-col'>
              <p className='font-Open-Sans text-[17px] pb-[10px]'>{telefono}</p>
              <p className='font-Open-Sans text-[17px] pb-[10px]'>{correo}</p>
              <p className='font-Open-Sans text-[17px] pb-[10px]'>{rol}</p>
            </div>
          </div>
          <div>
            <div className='w-[270px]'>
              <h2 className='font-Open-Sans text-[20px] pt-[10px] pb-[2px]'>Monitoreo Laboral Mensual</h2>
              <hr className='border-gray-400' />
            </div>
            <div className='flex'>
              <div className='mr-[5px]'>
                <p className='font-Open-Sans text-[17px] py-[10px] pr-[5px]'>Horas Trabajadas:</p>
                <p className='font-Open-Sans text-[17px] pb-[10px] pr-[5px]'>Ausencia de Horas:</p>
                <p className='font-Open-Sans text-[17px] pb-[10px] pr-[5px]'>Tiempo de Vacaciones:</p>
              </div>
              <div className='mr-[5px]'>
                <p className='font-Open-Sans text-[17px] py-[10px] pr-[5px]'>176 horas</p>
                <p className='font-Open-Sans text-[17px] pb-[10px] pr-[5px]'>16 horas</p>
                <p className='font-Open-Sans text-[17px] pb-[10px] pr-[5px]'>1 mes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
