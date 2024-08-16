// import React, { useState, useContext } from 'react';
// import { AppContext } from '../../Context/Context';
// import x from "../../../assets/x.png";

// export const ModalViewRole = ({ img, rol, nombreCompleto, correo, onEdit, onEditT, _id }) => {
//     // const { cards, setCards, setestadoModal1 } = useContext(AppContext);
//     // const [stateRol, setstateRol] = useState(() => {
//     //     const selectedCard = cards.find(card => card._id === _id);
//     //     return selectedCard ? selectedCard.isActive : true;
//     // });

//     // const handleRolClick = () => {
//     //     const updatedCards = cards.map(card =>
//     //         card._id === _id ? { ...card, isActive: !stateRol } : card
//     //     );
//     //     setCards(updatedCards);
//     //     localStorage.setItem('cards', JSON.stringify(updatedCards));
//     //     setstateRol(!stateRol);
//     // };

//     return (
//         <section className='w-full flex h-full bg-[#2020201d] fixed top-0 place-content-center items-center'>
//             <div className='items-center w-[500px] h-[300px] bg-[#D9D9D9] rounded-3xl px-[20px]'>
//                 <div className='flex justify-center items-center w-full relative left-[219px] top-5'>
//                     <img src={x} alt="" className='w-[15px] cursor-pointer' onClick={() => setestadoModal1(false)} />
//                 </div>
//                 <div className='items-center w-[460px] h-[200px] bg-[#D9D9D9] rounded-3xl flex justify-around px-[20px]'>
//                     <div className='place-content-center items-center'>
//                         <img className='rounded-[40px]' src={img} alt="" />
//                     </div>
//                     <div className='flex flex-col place-content-center items-center'>
//                         <h2 className='font-Open-Sans font-bold text-[18px] p-3px'>{nombreCompleto}</h2>
//                         <h3 className='font-Open-Sans font-medium text-[17px] p-3px'>{correo}</h3>
//                         <p className='font-Open-Sans p-3px'>{rol}</p>
//                         <p className='font-Open-Sans p-3px'>{stateRol ? 'Desactivado' : 'Activado'}</p>
//                     </div>
//                 </div>
//                 <div className='place-content-center items-center flex justify-around'>
//                     <button className='text-white text-[18px] rounded-lg px-[25px] py-0.5 bg-green-500 hover:bg-green-700 font-Open-Sans' onClick={onEditT}>
//                         Reporte
//                     </button>
//                     <button className='bg-blue-500 text-white text-[18px] rounded-lg px-[25px] py-0.5 hover:bg-[#0165FF] font-Open-Sans' onClick={onEdit}>
//                         Editar Rol
//                     </button>
//                     <button className={`text-white text-[18px] rounded-lg px-[25px] py-0.5 mr-[20px] font-Open-Sans ${stateRol ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-[#D40000]'}`} onClick={handleRolClick}>
//                         {stateRol ? 'Activar' : 'Desactivar'}
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );l
// };
