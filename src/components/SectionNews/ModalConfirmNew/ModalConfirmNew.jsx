import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../../Context/Context';


export const ModalConfirmNew = () => {
    const {ConfirmNew, setConfirmNew} = useContext(AppContext)


  return  (
    <>
    { ConfirmNew && (
        <div
      
      contentLabel="Confirmación"
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
      overlayClassName=""
    >
      <div className="bg-[#D9D9D9]   p-6 rounded-lg w-full max-w-md text-center">
        <p className="mb-4">La anomalia ha sido guardada correctamente</p>
        <button


className="bg-blue-500 text-white px-4 py-2 rounded"
onClick={() => setConfirmNew(!ConfirmNew)}
        >
          Cerrar
        </button>
      </div>
    </div>
    
  )}
  </>
    
    
  )
}
