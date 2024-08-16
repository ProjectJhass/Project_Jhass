import React from 'react'
import  correo  from "../../../assets/correo.png";
import  telefono  from "../../../assets/telefono.png";
import  ubicacion  from "../../../assets/ubicacion.png";

export const Section3 = () => {
  return (
    <section className='w-full h-[300px] flex justify-around items-center place-content-center bg-[#3C7ADA] px-[90px]' >
        <div className=' flex flex-col w-[230px] h-[220px] bg-[#ffffff] items-center place-content-center rounded-xl '>
            <img className='w-[80px]' src={telefono} alt="" srcset="" />
            <h4 className='font-Open-Sans font-semibold text-[17px] m-[3px]' >Telefono</h4>
            <h4 className='font-medium font-Open-Sans' >3025455698</h4>
        </div>
        <div className=' flex flex-col w-[230px] h-[220px] bg-[#ffffff] items-center place-content-center rounded-xl' >
            <img className='w-[80px]' src={correo} alt="" srcset="" />
            <h4 className='font-Open-Sans font-semibold text-[17px] m-[3px]'  >Correo electronico</h4>
            <h4 className='font-medium font-Open-Sans' >Jhass@gmail.com</h4>
        </div>
        <div className=' flex flex-col w-[230px] h-[220px] bg-[#ffffff] items-center place-content-center rounded-xl' >
            <img className='w-[80px]' src={ubicacion} alt="" srcset="" />
            <h4 className='font-Open-Sans font-semibold text-[17px] m-[3px]'  >Ubicacion</h4>
            <h4 className='font-medium font-Open-Sans' >Quindio,Colombia</h4>
        </div>
    </section>
  )
}
