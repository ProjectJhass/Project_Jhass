import React from 'react'
import { CuadrosList } from '../../CuadrosList/CuadrosList';
import { Cuadros } from "../../Cards/Cuadros";

const Section4 = () => {
    return (
      <div className="bg-white p-24">
        <div className="container mx-auto px-4">
          {Cuadros.map((testimonial, index) => (
            <CuadrosList
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              title={testimonial.title}
              img={testimonial.img}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Section4;
