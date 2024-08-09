import React, { useContext } from 'react';

import { AppContext } from '../Context/Context';
import { ModalViewRole } from '../ModalViewRole/ModalViewRole';
ModalViewRole





export const Card = ({img, nombre, rol}) => {
  const NewContext = useContext(AppContext);



  return (
    
   
 
    <div className="flex w-[260px] bg-[#D9D9D9] h-[240px] place-content-center items-center border-black border border-double m-[15px] cursor-pointer"  onClick={() => NewContext.setestadoModal1(!NewContext.estadoModal1)}  >
      <div className="flex flex-col items-center w-[150px] h-[150px] space-y-2 place-content-center">
        <img src={img} alt="Perfil de Jhoan Angulelo" />
        <h2 className="font-bold font-Open-Sans">{nombre}</h2>
        <h3 className="font-Open-Sans">{rol}</h3>

      </div>
    </div>


  

    
  );
};