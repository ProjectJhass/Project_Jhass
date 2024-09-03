import React from 'react'
import { Section1 } from '../../SectionsHelp/Section-1/Section1';
import { Section2 } from '../../SectionsHelp/Section-2/Section2';
import { Section4 } from '../../SectionsHelp/Section-4/Section4';
import { Communication } from '../../SectionsHelp/Communication/Communication';
import { Footer } from '../../Layouts/Footer/Footer';
import { Section5 } from '../../SectionsHelp/Section-5/Section5';



export const Contact_us = () => {
  return (
    <section className='w-full h-full' >

    <Section1/>
    <Section2/>
    <Communication/>
    <Section4/>
    <Section5/>
    <Footer/>
    </section>
  )
}
