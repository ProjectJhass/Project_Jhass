import React from 'react'

export const Section3 = () => {
  return (
    <section className='w-full min-h-[300px] h-auto py-[20px] flex flex-wrap justify-around items-center place-content-center bg-[#3C7ADA] px-[90px]' >
        <div  className=' flex flex-col w-[230px] h-[220px] m-[10px] bg-[#ffffff] items-center place-content-center rounded-xl '>
            <img className='w-[80px] mx-[10px]'  src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450504/ContentImagesJhass/xvamyu1fn3ddpwprb0hh.png" alt="" srcset="" />
            <h4 className='font-serif font-semibold mx-[10px] text-[17px] m-[3px]' >Telefono</h4>
            <h4 className='font-medium font-serif mx-[10px]'  >3025455698</h4>
        </div>
        <div className=' flex flex-col w-[230px] h-[220px] m-[10px] bg-[#ffffff] items-center place-content-center rounded-xl'  >
            <img className='w-[80px] mx-[10px]'  src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450500/ContentImagesJhass/riknw1difajp6wngvaqc.png" alt="" srcset="" />
            <h4 className='font-serif font-semibold mx-[10px] text-[17px] m-[3px] text-center'   >Correo electronico</h4>
            <h4 className='font-medium font-serif mx-[10px]'  >Jhass@gmail.com</h4>
        </div>
        <div  className=' flex flex-col w-[230px] h-[220px] m-[10px] bg-[#ffffff] items-center place-content-center rounded-xl' >
            <img className='w-[80px] mx-[10px]' src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450504/ContentImagesJhass/ek0bxbqw5r4h19sxsfkj.png" alt="" srcset="" />
            <h4 className='font-serif mx-[10px] font-semibold text-[17px] m-[3px]'   >Ubicacion</h4>
            <h4 className='font-medium mx-[10px] font-serif'  >Quindio,Colombia</h4>
        </div>
    </section>
  )
}
