import React from 'react';

export const Card = ({ img, title, description }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md max-w-sm flex flex-col">
      <div className="flex-shrink-0 h-48 w-full overflow-hidden bg-gray-200 border-b border-gray-300">
        <img src={img} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-6 flex flex-col items-center text-center flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
