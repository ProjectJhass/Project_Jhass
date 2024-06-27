import React from 'react'
import Mision  from "../../assets/Mision.png";
import Vision  from "../../assets/Vision.png";


export const Section2 = () => {
  return (
    <section className='flex items-center place-content-center bg-[#0165FF] w-full h-[700px] ' >
        <div className='flex flex-col items-center place-content-center w-[450px] h-[500px] m-[10px] bg-white rounded-2xl mr-[20px]'>
        <h3 className='font-serif font-semibold text-[20px] m-[10px]'>Mision</h3>
        <p className='font-serif text-justify w-[400px] mb-[20px]' >Nuestra misión en JHASS es optimizar la administración empresarial al proporcionar un sistema innovador que ofrece a los gerentes una visión clara y directa del estado operativo de sus empresas. Nos comprometemos a eliminar la dependencia de intermediarios y a facilitar el acceso ágil y efectivo a información vital, permitiendo a las organizaciones tomar decisiones informadas y mejorar su eficiencia operativa.</p>
        <img className='w-[180px] mb-[10px]' src={Mision} alt="" srcset="" />
        </div>
        
        <div className='flex flex-col items-center place-content-center w-[450px] h-[500px] m-[15px]  bg-white rounded-2xl ml-[20px]' >
        <img className='w-[270px] mt-[10px]' src={Vision} alt="" srcset="" />
        <h3  className='font-serif font-semibold text-[20px] m-[10px]'>Vision</h3>
        <p className='font-serif text-justify w-[400px] mb-[20px]' >Nuestra visión es convertirnos en el líder global en soluciones de gestión empresarial, empoderando a las empresas de todos los tamaños a alcanzar un nivel superior de eficiencia y transparencia operativa. Aspiramos a revolucionar la forma en que las organizaciones acceden y utilizan la información, transformando la administración empresarial en un proceso sencillo, rápido y directo, sin barreras ni intermediarios.</p>
        
        </div>
    </section>
  )
}
