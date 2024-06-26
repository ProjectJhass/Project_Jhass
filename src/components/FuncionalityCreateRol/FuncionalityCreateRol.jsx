import React from 'react'
import perfil1 from '../../assets/perifil1.png';

export const FuncionalityCreateRol = () => {
    
  return (
    <section className='w-full flex h-[600px] bg-[#000000b4] fixed backdrop-blur-sm top-[70px] place-content-center items-center hidden'>
    <div className=' items-center w-[500px] h-[300px] bg-[#D9D9D9] rounded-3xl px-[20px]'>
        <div className=' items-center w-[460px] h-[200px] bg-[#D9D9D9] rounded-3xl flex justify-around px-[20px]'>
            <div className='place-content-center items-center'>
                <img className='rounded-[40px] ' src={perfil1} alt="" />
            </div>
            <div className='w-[200px]'>
                <h2 className='font-serif font-bold text-[18px] '>Angel Andres Hoyos</h2>
                <h3 className='font-serif font-medium text-[17px] '>angelhoyos@gmial.com</h3>
                <p className='font-serif p-[1px]' >Super Administrador</p>
                <input className='font-serif m-[2px] text-center rounded-md' type="text" name="" id="" placeholder='Super Administrador'/>
                <input className='font-serif  text-center rounded-md m-[2px]' type="text" name="" id="" placeholder='   Activo'/>
            </div>
            
        </div>
        <div className='place-content-center items-center flex justify-around'>
            <button 
           
            className=' bg-blue-500 text-white text-[18px] rounded-lg px-[25px] py-0.5 hover:bg-[#0165FF] '>Editar Rol</button>
            <button className=' bg-red-500 text-white text-[18px] rounded-lg px-[25px] py-0.5 hover:bg-[#D40000] mr-[20px]' >Eliminar</button>
        </div>
    </div>  
    </section>
  )
}
