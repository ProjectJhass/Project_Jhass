import React from 'react';
import { Chart } from 'react-google-charts';

const GraficaB = () => {
    const data = [
        [{ v: [8, 0, 0], f: '8 am' }, 1, 0.25],
        [{ v: [9, 0, 0], f: '9 am' }, 2, 0.5],
        [{ v: [10, 0, 0], f: '10 am' }, 3, 1],
        [{ v: [11, 0, 0], f: '11 am' }, 4, 2.25],
        [{ v: [12, 0, 0], f: '12 pm' }, 5, 2.25],
        [{ v: [13, 0, 0], f: '1 pm' }, 6, 3],
        [{ v: [14, 0, 0], f: '2 pm' }, 7, 4],
        [{ v: [15, 0, 0], f: '3 pm' }, 8, 5.25],
        [{ v: [16, 0, 0], f: '4 pm' }, 9, 7.5],
        [{ v: [17, 0, 0], f: '5 pm' }, 10, 10],
    ];

    const columns = [
        { type: 'timeofday', label: 'Hora del Día' },
        { type: 'number', label: 'Nivel de Motivación' },
        { type: 'number', label: 'Nivel de Energía' },
    ];

    const options = {
        backgroundColor: '#EEEEEE',
        title: 'Nivel de Motivación y Energía a lo Largo del Día',
        hAxis: {
            title: 'Hora del Día',
            format: 'h:mm a',
            viewWindow: {
                min: [7, 30, 0],
                max: [17, 30, 0],
            },
        },
        vAxis: {
            title: 'Valoración (escala de 1-10)',
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
