import React from 'react'
import { Section1 } from "../../SectionsUs/Section1/Section1";
import { Section2 } from "../../SectionsUs/Section2/Section2";
import { Section3 } from "../../SectionsUs/Section3/Section3";
import { SenctionHeader } from "../../SectionsUs/SenctionHeader/SenctionHeader";
import { Footer } from "../../Layouts/Footer/Footer";


export const Nosotros = () => {
  return (
    <>
    <div className='flex-col w-full h-auto'>
<SenctionHeader/>
<Section1/>
<Section2/>
<Section3/>
<Footer/>
</div>
</>
  )
}
