import React from 'react';
import { CuadrosList } from '../CuadrosList/CuadrosList';
import { Cuadros } from "../Cards/Cuadros";

export const Section4Home = () => {
    return (
        <div className="bg-white py-24 pb-0 pt-12">
            <div className="container mx-auto px-4">
                {Cuadros.map((testimonial, index) => (
                    <CuadrosList
                        key={index}
                        text={testimonial.text}
                        title={testimonial.title}
                        img={testimonial.img}
                    />
                ))}
            </div>
        </div>
    );
};
