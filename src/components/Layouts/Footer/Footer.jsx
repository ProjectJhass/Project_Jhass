import React from 'react'
import face from '../../../images/Logo6.png'
import inst from '../../../images/Logo5.png'
import whats from '../../../images/Logo4.png'

export const Footer = () => {
    return (
        <div className='w-full h-[100px] bg-[#EEEEEE] flex absolute bottom-0 items-center justify-around' >
            <div className='flex items-center'>
                <div>
                    <img className='px-[5px] w-[30px]' src={face} alt="" />
                </div>
                <div>
                    <img className='px-[5px] w-[30px]' src={inst} alt="" />
                </div>
                <div>
                    <img className='px-[5px] w-[35px]' src={whats} alt="" />
                </div>
            </div>
            <h3 className='font-serif'>Copyright 2024 Jhass CRM. All rights reserved.</h3>
        </div>
    )
}