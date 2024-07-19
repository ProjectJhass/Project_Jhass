import React from 'react';
import { Chart } from 'react-google-charts';

const GraficaP = () => {
  const data = [
    ['Elemento', 'Porcentaje'],
    ['Nitrógeno', 0.78],
    ['Oxígeno', 0.21],
    ['Otros', 0.01], 
  ];

  const options = {
    title: 'Composición del Aire',
    backgroundColor: '#EEEEEE', 
  };

  return (
    <div className='border-2 border-gray-300 rounded-lg overflow-hidden'>
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="100%"
      height="400px"
      legendToggle
    />
    </div>
    
  );
};

export default GraficaP;
