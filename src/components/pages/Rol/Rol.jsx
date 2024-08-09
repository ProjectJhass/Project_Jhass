import React from 'react'
import { Section } from '../../SectionEmployees/Section'
import { SectionViewRole } from '../../ModalViewRole/SectionViewRole/SectionViewRole'
import HeaderUser from '../../Layouts/HeaderUser/HeaderUser'


export const Rol = () => {
  const navItemstock = [
    {   route: "/Cale", content:"Calendario"},
    {   route: "/Rol", content:"Roles"},
    {   route: "/Stock", content:"Productos"}
    
    
    
    ];
  return (
    <div>
      <HeaderUser navItems={navItemstock} username={"Usuario"}/>
        <Section/>
        <SectionViewRole/>
    </div>
  )
}
