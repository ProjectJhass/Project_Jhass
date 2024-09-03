import React from 'react';
import { Chart } from 'react-google-charts';

const GraficaP = ({ data }) => {
  const options = {
    title: 'Productos en Bodega',
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
