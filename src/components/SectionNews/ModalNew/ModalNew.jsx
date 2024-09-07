import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../../Context/Context';

export const ModalNew = () => {
    const { selectedCardId, cards, setCards, SModalNew, setSModalNew, ConfirmNew, setConfirmNew } = useContext(AppContext);
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (selectedCardId) {
            const selectedCard = cards.find((card) => card._id === selectedCardId);
            if (selectedCard) {
                setDescription(selectedCard.descripcion);
                setDate(selectedCard.fecha);
            }
        } else {
            setDescription('');
            setDate('');
        }
    }, [selectedCardId, cards]);

    const handleSave = () => {
        if (selectedCardId) {
            // Editar una anomalía existente
            const updatedCards = cards.map((card) =>
                card._id === selectedCardId ? { ...card, descripcion: description, fecha: date } : card
            );
            setCards(updatedCards);
        } else {
            // Crear una nueva anomalía
            const newCard = {
                _id: Date.now().toString(),
                descripcion: description,
                fecha: date,
                isActive: true,
            };
            setCards([...cards, newCard]);
        }
        localStorage.setItem('cards', JSON.stringify([...cards]));
        setSModalNew(false); // Cerrar el modal después de guardar

        setConfirmNew(!ConfirmNew);
    };

    if (!SModalNew) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#D9D9D9] p-4 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4 font-Open-Sans">{selectedCardId ? 'Editar' : 'Crear'} Anomalía</h2>
                <h3 className="font-Open-Sans font-semibold pb-[5px] px-[5px]">Descripición</h3>

                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Descripción'
                    className="block w-full p-2 border rounded mb-2 font-Open-Sans"
                />
                                <h3 className="font-Open-Sans font-semibold pb-[5px] px-[5px]">Fecha</h3>

                <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder='Ej.06/09/2024'
                    className="block w-full p-2 border rounded mb-2 font-Open-Sans"
                />
                <div className="flex justify-center">
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 font-Open-Sans"
                    >
                        Guardar
                    </button>
                    <button
                        onClick={() => setSModalNew(false)}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded font-Open-Sans"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root-new')
    );
};

export default ModalNew;
