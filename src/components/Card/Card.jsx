import React from 'react';

export const Card = ({ img, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm flex flex-col">
    <div className="h-48 w-full overflow-hidden rounded-t-lg">
      <img src={img} alt={title} className="object-cover h-full w-full" />
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
  );
};
    