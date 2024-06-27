import React from 'react'
import img1s1 from '../../assets/img1-s1.jpg'
import img1s2 from '../../assets/img2-s1.jpg'

export const Section1 = () => {
  return (
    <section className='flex items-center place-content-center w-full h-[535px] flex-col my-[30px]'>
        <div>
        <h2 className='font-serif font-semibold text-[30px] text-center'>Ofrecer soluciones completas <br /> de tecnología CRM.</h2>
        </div>
        <div className='flex w-full h-[435px] mt-[10px]'>
    <div className='w-[50%] '>
    <img className='w-[280px] absolute left-[21.5rem]' src={img1s1} alt="" srcset="" />
    </div>
    
    <div className='flex flex-col w-[50%] '>
        <img className='w-[400px]' src={img1s2} alt="" srcset="" />
<p className='w-[500px] h-[142px] font-medium font-serif mt-[14px]'>Jhass CRM proporciona gestión de relaciones con clientes software para ayudar a las empresas a gestionar las interacciones con clientes actuales y potenciales. Nuestro software incluye administración de contactos, seguimiento de oportunidades, administración de tareas y otras características para ayudar a las empresas a aumentar las ventas, mejorar el servicio al cliente y aumentar la eficiencia.</p>

    </div>
    </div>
    </section>
  )
}
