import React from 'react'
import {  } from "../../../public/edificios.jpg";

export const SectionCreateAccount = () => {
  return (
    <section className="w-screen h-screen bg-[url('../../../public/edificios.jpg')] flex justify-center items-center">
    <section className='h-3/4 w-3/4 bg-[#020C2A] rounded-2xl'>
      <div className='w-full' >
      <button className='w-16 m-1 border-2 border-white rounded-ss-2xl rounded-ee-2xl'><img className='rounded-ss-2xl rounded-ee-2xl' src="../../../public/flecha.png" alt="" /></button>
      <div className='flex justify-center items-center'><h1 className='font-Se text-3xl text-white'>Crear Cuenta</h1></div>
      </div>
      <section className='w-full h-72 flex justify-evenly flex-row items-center'>
        <div className='w-2/4 h-full flex justify-evenly items-center flex-col'>
        <h3 className="text-white text-xl font-serif ml-[-34.5%]">Nombres</h3>
      <input type="text" placeholder=' E.j Angel' className=' h-8 w-2/4 text-white rounded-md bg-[#0D1C49]'/>
      <h3 className="text-white text-xl font-serif ml-[-34.5%]">Apellidos</h3>
      <input type="text" placeholder=' E.j Hurtado' className=' h-8 w-2/4 text-white rounded-md bg-[#0D1C49]'/>
      <h3 className="text-white text-xl font-serif ml-[-13.5%]">Fecha de Nacimiento</h3>
      <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" placeholder=" Fecha de Nacimiento" className="h-8  w-2/4  rounded-md bg-[#0D1C49] text-white" required></input>

        </div >
        <div className='w-2/4 h-full flex justify-evenly items-center flex-col'>
        <h3 className="text-white text-xl font-serif ml-[-17.5%]">Correo Electronico</h3>
      <input type="email" placeholder='    angel@gmail.com' className='text-white w-3/6 h-8 rounded-md bg-[#0D1C49]'/>
      <h3 className="text-white text-xl font-serif ml-[-29%]">Contraseña</h3>
      <input type="password" placeholder="    ************" className="h-8 w-3/6 text-white rounded-md bg-[#0D1C49]"/>
      <h3 className="text-white text-xl font-serif ml-[-6.5%]">Confirme su Contraseña</h3>
      <input type="password" placeholder="    ************" className="h-8 text-white w-3/6 rounded-md bg-[#0D1C49]"/>
        </div >
        </section>
        <div className=' w-full h-1/6 flex flex-col justify-evenly items-center' >
        <button className='bg-[#0165FF] w-44 h-11 rounded-lg text-xl border-white border font-serif  text-white'>Crear Cuenta</button>
        <a className='text-[#0165FF] font-serif ' href="#">¿Ya Tienes Cuenta?</a>
        </div>
    </section >
  </section>
  )
}
