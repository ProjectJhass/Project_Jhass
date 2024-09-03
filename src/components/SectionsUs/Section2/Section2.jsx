import React from 'react';


export const Section2 = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center bg-[#020C1D] w-full min-h-[700px] h-auto p-[20px]'>
      <div className='flex flex-col items-center justify-center w-full md:w-[450px] h-auto md:h-[500px] bg-white rounded-2xl m-[10px] p-[20px]'>
        <h3 className='font-serif font-semibold text-[20px] mb-[10px]'>Misión</h3>
        <p className='font-serif text-justify w-full md:w-[400px] mb-[20px]
         text-sm   
                     
                        md:text-base 
                         sm:text-sm'>
          Nuestra misión en JHASS es optimizar la administración empresarial al proporcionar un sistema innovador que ofrece a los gerentes una visión clara y directa del estado operativo de sus empresas. Nos comprometemos a eliminar la dependencia de intermediarios y a facilitar el acceso ágil y efectivo a información vital, permitiendo a las organizaciones tomar decisiones informadas y mejorar su eficiencia operativa.
        </p>
        <img className='w-[180px] mb-[10px]' src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450507/ContentImagesJhass/fsbrvrm02ocxv5q0rtat.png" alt="Misión" />
      </div>

      <div className='flex flex-col items-center justify-center w-full md:w-[450px] h-auto md:h-[500px] bg-white rounded-2xl m-[10px] p-[20px]'>
        <img className='w-[200px] md:w-[270px] mt-[10px] mb-[10px]' src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450506/ContentImagesJhass/uvx6m3foms4uhid0ic8d.png" alt="Visión" />
        <h3 className='font-serif font-semibold text-[20px] mb-[10px]'>Visión</h3>
        <p className='font-serif text-justify w-full md:w-[400px] mb-[20px] 
         text-sm  mt-[10px] 
                     
                        md:text-base 
                         sm:text-sm'>
          Nuestra visión es convertirnos en el líder global en soluciones de gestión empresarial, empoderando a las empresas de todos los tamaños a alcanzar un nivel superior de eficiencia y transparencia operativa. Aspiramos a revolucionar la forma en que las organizaciones acceden y utilizan la información, transformando la administración empresarial en un proceso sencillo, rápido y directo, sin barreras ni intermediarios.
        </p>
      </div>
    </section>
  )
}
