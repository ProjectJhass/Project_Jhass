import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../../Context/Context';

const ModalTracking = ({ onSave, onClose, isOpenTracking }) => {
    const { selectedCardId, cards, setModalTrackingIsOpen } = useContext(AppContext);
    const [trabajadas, setHorasTrabajadas] = useState('');
    const [ausencias, setAusenciaDeHoras] = useState('');
    const [vacaciones, setTiempoDeVacaciones] = useState('');
    const NewContex = useContext(AppContext)

    useEffect(() => {
        if (selectedCardId) {
            const selectedCard = cards.find((card) => card._id === selectedCardId);
            if (selectedCard) {
                setHorasTrabajadas(selectedCard.Trabajadas);
                setAusenciaDeHoras(selectedCard.Ausencias);
                setTiempoDeVacaciones(selectedCard.Vacaciones);
            }
        }
    }, [selectedCardId, cards]);

    const handleSave = () => {
        const updatedCards = cards.map((card) =>
            card._id === selectedCardId ? { ...card, Trabajadas: trabajadas, Ausencias: ausencias, Vacaciones: vacaciones } : card
        );
        onSave(updatedCards);
        onClose();
        NewContex.setModalIsOpen(!NewContex.modalIsOpen)
        setModalTrackingIsOpen(false); 
    };

    if (!isOpenTracking) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#D9D9D9] p-4 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4 font-Open-Sans">Monitoreo Laboral Mensual</h2>
                <h3 className="font-Open-Sans font-semibold pb-[5px] px-[5px]">Horas Trabajadas</h3>
                <input
                    type="text"
                    value={trabajadas}
                    onChange={(e) => setHorasTrabajadas(e.target.value)}
                    placeholder='Ej. 176 horas'
                    className="block w-full p-2 border rounded mb-2 font-Open-Sans"
                />
                <h3 className="font-Open-Sans font-semibold p-[5px]">Ausencia de Horas</h3>
                <input
                    type="text"
                    value={ausencias}
                    onChange={(e) => setAusenciaDeHoras(e.target.value)}
                    placeholder='Ej. 8 horas'
                    className="block w-full p-2 border rounded mb-2 font-Open-Sans"
                />
                <h3 className="font-Open-Sans font-semibold p-[5px]">Tiempo de Vacaciones</h3>
                <input
                    type="text"
                    value={vacaciones}
                    onChange={(e) => setTiempoDeVacaciones(e.target.value)}
                    placeholder='Ej. 1 mes'
                    className="block w-full p-2 border rounded mb-2 font-Open-Sans"
                />
                <div className="flex justify-around py-[5px] place-content-center">
                    <button
                        onClick={handleSave}
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

export default ModalTracking;
