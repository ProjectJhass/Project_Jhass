import React from 'react';
import React from 'react';
import perfil1 from '../../assets/perifil1.png';
import { Main } from '../../Main/Main';
import mas from '../../assets/+rol.png';
import { NavLink, useRoutes } from "react-router-dom";
import { FunctionalityRole } from '../FunctionalityRole/FunctionalityRole';



export const Section = () => {
  const AppRoutes=()=>{
    let routes= useRoutes([
      {path:"/FunctionalityRole", component: <FunctionalityRole/>},
    ]);
  }
  return (
    <Main>
    <div className="flex w-[260px] bg-[#D9D9D9] h-[240px] place-content-center items-center border-black border border-double m-[15px]">
      <div className="flex flex-col items-center w-[150px] h-[150px] space-y-2 place-content-center">
        <img src={mas} className='w-[110px] mb-[15px]' alt="Perfil de Jhoan Angulelo" />
        <NavLink to={'/FunctionalityRole'}>
        <button  className=" bg-blue-500 text-white text-[18px] rounded-lg px-[25px] py-0.5 hover:bg-[#0165FF] ">Crear Rol</button>
        </NavLink>
      </div>
    </div>
    <div className="flex w-[260px] bg-[#D9D9D9] h-[240px] place-content-center items-center border-black border border-double m-[15px]">
      <div className="flex flex-col items-center w-[150px] h-[150px] space-y-2 place-content-center">
        <img src={perfil1} alt="Perfil de Jhoan Angulelo" />
        <h2 className="font-bold font-serif">Jhoan Cardenas</h2>
        <h3 className="font-serif">Administrador</h3>
      </div>
    </div>


    </Main>

    
  );
};