import React, {  useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../../Context/Context';



const Modal = ({ isOpen, card, onSave, onClose }) => {
    const [telefono, setTelefono] = useState(card ? card.telefono : '');
    const [correo, setCorreo] = useState(card ? card.correo :'')
    const NewContex = useContext(AppContext)

  const handleSave = () => {
    onSave({ ...card, telefono, correo });
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#D9D9D9]  p-4 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 font-Open-Sans">Editar Perfin</h2>
        <h3 className='font-Open-Sans font-semibold pb-[5px] px-[5px]' >Telefono</h3>
        <input
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="  block w-full p-2 border rounded mb-2 font-Open-Sans"
        />
       <h3 className=' font-Open-Sans font-semibold p-[5px] ' >Correo Electronico</h3>
                <input
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="block w-full p-2 border rounded mb-2 font-Open-Sans"
        />
        <div className="flex justify-around py-[5px] place-content-center">
          <button
            onClick={ () => {

              handleSave();
              NewContex.setModalIsOpen(!NewContex.modalIsOpen)
              
            }
          }
              
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 font-Open-Sans"
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded font-Open-Sans"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
