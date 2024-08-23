import React from 'react';
import { CuadrosList } from '../CuadrosList/CuadrosList';
import { Cuadros } from "../Cards/Cuadros";

export const Section4Home = () => {
    return (
        
            <div className=" px-4 w-full  my-[50px]">
                {Cuadros.map((testimonial, index) => (
                    <CuadrosList
                        key={index}
                        text={testimonial.text}
                        title={testimonial.title}
                        img={testimonial.img}
                    />
                ))}
            </div>
       
    );
};
