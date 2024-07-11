import React from 'react'
import { Section1Home } from "../../SectionsHome/Section-1/Section1Home";
import { Section2Home } from "../../SectionsHome/Section-2/Section2Home";
import { Section3Home } from "../../SectionsHome/Section-3/Section3Home";
import { Section4Home } from "../../SectionsHome/Section-4/Section4Home";
import { Footer } from '../../Layouts/Footer/Footer';


export const Home = () => {
  return (
    <>
    <div className='flex-col w-full h-auto' >

    <Section1Home/>
    <Section2Home/>
    <Section3Home/>
    <Section4Home/>
    <Footer/>

    </div>
    </>
  )
}
