import React, { useContext } from 'react'
import { Section } from '../../SectionEmployees/Section'
import {ModalConfirm} from '../../SectionEmployees/ModalConfirm/ModalConfirm'
import FilterTracking from '../../employeeTracking/FilterTracking/FilterTracking'
import { AppContext } from '../../Context/Context'
import HeaderUser from '../../Layouts/HeaderUser/HeaderUser'
import { Footer } from '../../Layouts/Footer/Footer'


export const Rol = () => {
  const {user}=useContext(AppContext);

  const navItems=[
    { route: "/Cale", content: "Calendario" },
    { route: "/Rol", content: "Roles" },
    { route: "/Stock", content: "Productos" }
   ]
  return (

    <div>
  <HeaderUser 
        navItems={navItems} 
        username={user ? `${user.nombre} ${user.apellido}` : "Usuario"} 
      /> 

        <Section/>

        <ModalConfirm/>
        <Footer/>
    </div>
  )
}
