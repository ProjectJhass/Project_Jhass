import React, { useState } from 'react';

export const Card = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('Título de la Card');
  const [description, setDescription] = useState('Descripción de la Card');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="block w-full p-2 border rounded mb-2"
          />
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="block w-full p-2 border rounded mb-2"
          />
          <button
            onClick={handleSaveClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Guardar
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-700 text-base">{description}</p>
          <button
            onClick={handleEditClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Editar
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
