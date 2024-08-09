import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import HeaderUser from '../Layouts/HeaderUser/HeaderUser'

export  const  Cale=() =>{
  return (
    <>
    <HeaderUser navItems={[""]} username={"Usuario"}/>
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      />
      </>
  )
}