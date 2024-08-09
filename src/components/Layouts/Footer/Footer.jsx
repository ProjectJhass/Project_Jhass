import React from 'react';
import face from '../../../assets/logo-de-facebook.png';
import inst from '../../../assets/logotipo-de-instagram.png';
import whats from '../../../assets/whastapp.png';

export const Footer = () => {
  return (
    <div className='w-full bg-[#EEEEEE] flex flex-col sm:flex-row items-center justify-between p-4'>
      <div className='flex items-center space-x-4'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img className='w-8 h-8 object-contain' src={face} alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img className='w-8 h-8 object-contain' src={inst} alt="Instagram" />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img className='w-8 h-8 object-contain' src={whats} alt="WhatsApp" />
        </a>
      </div>
      <h3 className='text-center mt-2 sm:mt-0 font-serif text-sm sm:text-base'>
        Copyright 2024 Jhass CRM. All rights reserved.
      </h3>
    </div>
  );
};
