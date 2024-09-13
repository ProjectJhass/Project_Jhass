import React from 'react';

export const Section1 = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full h-auto md:h-[565px] my-[40px] bg-[#ffffff]'>
      <div>
        <h2 className='font-serif font-semibold text-[24px] md:text-[30px] text-center px-[50px]'>
          Ofrecer soluciones completas <br /> de tecnología CRM.
        </h2>
      </div>
      <div className='flex flex-col md:flex-row w-full h-auto md:h-[435px] mt-[10px] items-center'>
        <div className='w-full md:w-[50%]  justify-center  md:justify-end mr-[10px] hidden md:flex '>
          <img
            className='w-[240px] md:w-[280px] '
            src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450542/ContentImagesJhass/euxffvsqj9dyqidpi1ro.jpg"
          />
        </div>
        <div className='flex flex-col w-full md:w-[50%] items-center md:items-start '>
          <img className='w-[300px] md:w-[400px] my-[14px] md:mb-0' src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450510/ContentImagesJhass/tnkqcuhiuu6kwqzunriy.jpg"/>
          <p className='w-[300px] md:w-[500px]  md:text-left text-justify font-medium font-serif *
          text-sm  mt-[10px] 
                     
                        md:text-base 
                         sm:text-sm'>
            Jhass CRM proporciona gestión de relaciones con clientes software para ayudar a las empresas a gestionar las interacciones con clientes actuales y potenciales. Nuestro software incluye administración de contactos, seguimiento de oportunidades, administración de tareas y otras características para ayudar a las empresas a aumentar las ventas, mejorar el servicio al cliente y aumentar la eficiencia.
          </p>
        </div>
      </div>
    </section>
  );
};
