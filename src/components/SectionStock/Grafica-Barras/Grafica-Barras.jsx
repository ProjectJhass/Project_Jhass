import React from 'react';
import { Chart } from 'react-google-charts';

const GraficaB = ({ data }) => {
    const columns = [
        { type: 'string', label: 'Producto' },
        { type: 'number', label: 'Cantidad' },
    ];

    const options = {
        backgroundColor: '#EEEEEE',
        title: 'Cantidad de Productos',
        hAxis: {
            title: 'Producto',
        },
        vAxis: {
            title: 'Cantidad',
        },
    };

    return (
        <div className='border-2 border-gray-300 rounded-lg overflow-hidden'>
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={[columns, ...data]}
                options={options}
            />
        </div>
    );
};

export default GraficaB;
