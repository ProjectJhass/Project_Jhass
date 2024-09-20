import React, { useContext, useState, useEffect } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import MiniCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'tailwindcss/tailwind.css';
import { ModalCreateTask } from './ModalCreateTask/CreateEvent/ModalCreateTask';
import { AppContext } from '../Context/Context';
import HeaderUser from '../Layouts/HeaderUser/HeaderUser';
import { Footer } from '../Layouts/Footer/Footer';
import DeleteEventModal from "./DeleteEvent/DeleteEvent";
dayjs.locale('es');
const localizer = dayjsLocalizer(dayjs);

export const Cale = () => {
  const {
    newEvent,
    setNewEvent,
    events,
    setEvents,
    setDeleteEventModal,
    setEventToDelete,
    deleteEventModal // Traemos el estado del modal de eliminación
  } = useContext(AppContext);

  const [date, setDate] = useState(new Date());
  const [view, setView] = useState('month');
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (selectedDate) {
      setDate(selectedDate);
      setView('day');
    }
  }, [selectedDate]);

  const handleAddEvent = (eventData) => {
    setEvents([
      ...events,
      {
        title: `${eventData.title} (Asignado a: ${eventData.assignedTo})`,
        start: dayjs(eventData.start).toDate(),
        end: dayjs(eventData.end).toDate(),
      },
    ]);
    setNewEvent({ title: '', start: '', end: '', assignedTo: '' });
  };

  // Manejo de la selección del evento para abrir el modal de eliminación
  const handleSelectEvent = (event) => {
    setEventToDelete(event); // Guardamos el evento a eliminar
    setDeleteEventModal(true); // Abrimos el modal de eliminación
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  const handleCreateTask = () => {
    setIsModalOpen(true); // Abre el modal para crear tarea
    setIsDropdownOpen(false); // Cierra el dropdown
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };

  const { user } = useContext(AppContext);
  const navItems = [
    { route: "/Cale", content: "Calendario" },
    { route: "/Rol", content: "Roles" },
    { route: "/Stock", content: "Productos" },
  ];

  return (
    <>
      <HeaderUser
        navItems={navItems}
        username={user ? `${user.nombre} ${user.apellido}` : "Usuario"}
      />
      <div className="flex flex-col h-screen">
        <header className="flex justify-between items-center bg-white p-4">
          <div className="flex items-center space-x-4 justify-between w-full mx-[15px]">
            <h3 className="text-lg font-semibold mb-2">Mis calendarios</h3>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:shadow-lg"
              >
                Crear
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <button
                    onClick={handleCreateTask}
                    className="block px-4 py-2 text-left w-full hover:bg-blue-100"
                  >
                    Crear Evento
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="flex flex-1">
          <aside className="w-1/4 bg-white px-[30px]">
            <MiniCalendar
              onChange={handleDayClick}
              value={date}
              className="rounded-lg shadow-md mb-4"
              tileClassName="hover:bg-blue-200"
            />

            <div className="rounded-lg shadow-md p-4 bg-white">
              <h4 className="text-md font-semibold mb-2">Agenda</h4>
              <ul>
                {events.map((event, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-medium">{dayjs(event.start).format('DD/MM/YYYY')}</span>: {event.title}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="flex-1 p-4">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              view={view}
              onView={(newView) => setView(newView)}
              onSelectEvent={handleSelectEvent} // Selecciona el evento para eliminarlo
              messages={{
                next: 'Sig.',
                previous: 'Ant.',
                today: 'Hoy',
                month: 'Mes',
                week: 'Semana',
                day: 'Día',
                agenda: 'Agenda',
                date: 'Fecha',
                time: 'Hora',
                event: 'Evento',
              }}
            />
          </main>
        </div>
      </div>

      {/* Modal para crear tarea */}
      {isModalOpen && (
        <ModalCreateTask 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          handleAddEvent={handleAddEvent} 
        />
      )}

      {/* Modal para eliminar tarea */}
      {deleteEventModal && <DeleteEventModal />}

      <Footer />
    </>
  );
};
