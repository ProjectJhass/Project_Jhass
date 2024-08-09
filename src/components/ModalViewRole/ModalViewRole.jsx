import React from 'react'

import { AppContext } from '../Context/Context';
import { useContext } from 'react';
import  x  from "../../assets/x.png";

export const ModalViewRole = ({img, rol, nombreCompleto, correo, onEdit }) => {
    const NewContext = useContext(AppContext);

  return (
    <>
    
    <section className='w-full flex h-full bg-[#000000b4] fixed backdrop-blur-sm top-[70px] place-content-center items-center ' >
        
    <div className=' items-center w-[500px] h-[300px] bg-[#D9D9D9] rounded-3xl px-[20px]'>
        <div  className='flex justify-center items-center w-full  relative left-[219px] top-5'>
    <img src={x} alt="" srcset="" className='w-[15px] cursor-pointer' onClick={() => NewContext.setestadoModal1(!NewContext.estadoModal1)}/>

        </div>
        <div className=' items-center w-[460px] h-[200px] bg-[#D9D9D9] rounded-3xl flex justify-around px-[20px]'>
            <div className='place-content-center items-center '  >
                <img className='rounded-[40px] ' src={img} alt=""   />
            </div>
            <div className='flex flex-col place-content-center items-center'>
                <h2 className='font-Open-Sans font-bold text-[18px] p-3px'>{nombreCompleto}</h2>
                <h3 className='font-Open-Sans font-medium text-[17px] p-3px'>{correo}</h3>
                <p className='font-Open-Sans p-3px' >{rol}</p>
                <p className='font-Open-Sans p-3px'>Activo</p>
            </div>
            
        </div>
        <div className='place-content-center items-center flex justify-around'>
            <button className=' bg-blue-500 text-white text-[18px] rounded-lg px-[25px] py-0.5 hover:bg-[#0165FF] font-Open-Sans' onClick={onEdit}  >Editar Rol</button>
            <button className=' bg-red-500 text-white text-[18px] rounded-lg px-[25px] py-0.5 hover:bg-[#D40000] mr-[20px] font-Open-Sans ' >Eliminar</button>
        </div>
    </div>  
    </section>
    
    </>
  )
}
