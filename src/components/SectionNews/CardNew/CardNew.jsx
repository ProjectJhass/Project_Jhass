import React from 'react'

export const CardNew = ({ fechaNew, descripcionNew }) => {
  return (
    <div>
        <h2>Descripcion</h2>
        <p>{descripcionNew}</p>
        <h2>Fecha</h2>
        <p>{fechaNew}</p>
        {console.log(descripcionNew)}
    </div>
  );
};