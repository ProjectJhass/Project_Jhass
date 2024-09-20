import React from 'react';
import ReactDOM from 'react-dom';

const handlePdf = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/v1/pdf/all-users-report");

        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }

        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/pdf')) {
            const blob = await response.blob(); // Obtiene el PDF como un Blob
            const url = window.URL.createObjectURL(blob); // Crea un objeto URL para el Blob
            window.open(url); // Abre el PDF en una nueva pestaña
        } else {
            const text = await response.text(); // Obtiene la respuesta como texto
            console.error("Respuesta inesperada:", text); // Muestra la respuesta en texto
        }
    } catch (error) {
        console.error("Error al generar el reporte:", error);
    }
};

export const ModalReport = ({ onClose, isOpenTracking }) => {
    if (!isOpenTracking) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center text-center items-center">
            <div className="bg-[#D9D9D9] p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4 font-Open-Sans">Confirmación</h2>
                <p className="mb-4 font-Open-Sans text-base">¿Está seguro de que desea generar el reporte de empleados?</p>
                <div className="flex justify-evenly py-[5px] place-content-center mx-[70px]">
                    <button
                        onClick={() => {
                            handlePdf(); // Llama a la función para generar el reporte
                            onClose(); // Cierra el modal
                        }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-2 font-Open-Sans"
                    >
                        Aceptar
                    </button>
                    <button
                        onClick={onClose} // Cierra el modal sin realizar ninguna acción
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg font-Open-Sans"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root') // Asegúrate de tener este div en tu HTML
    );
};

export default ModalReport;
