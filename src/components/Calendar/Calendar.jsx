import React, { useContext, useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import es from 'date-fns/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { ModalCreateTask } from './ModalCreateTask/CreateEvent/ModalCreateTask';
import { AppContext } from '../Context/Context';
import DeleteEventModal from './DeleteEvent/DeleteEvent';
import MiniCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'tailwindcss/tailwind.css';
import HeaderUser from '../Layouts/HeaderUser/HeaderUser';
HeaderUser

dayjs.locale('es');

const locales = {
  es: es,
};

const localizer = dateFnsLocalizer({
  format: (date, formatStr, options) => format(date, formatStr, { locale: locales['es'], ...options }),
  parse: (str, formatStr, options) => parse(str, formatStr, new Date(), { locale: locales['es'], ...options }),
  startOfWeek: (date, options) => startOfWeek(date, { locale: locales['es'], ...options }),
  getDay: (date, options) => getDay(date, { locale: locales['es'], ...options }),
  locales,
});

// Custom toolbar for react-big-calendar
const CustomToolbar = ({ label, onNavigate, onView, view }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <button
          onClick={() => onNavigate('TODAY')}
          className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
        >
          Hoy
        </button>
        <button
          onClick={() => onNavigate('PREV')}
          className="px-2 py-1 bg-gray-200 rounded mr-2"
        >
          {'<'} Ant.
        </button>
        <button
          onClick={() => onNavigate('NEXT')}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          Sig. {'>'}
        </button>
      </div>
      <span className="font-semibold">{label}</span>
      <div className="flex items-center">
        <button
          onClick={() => onView('month')}
          className={`px-2 py-1 ${view === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded mr-2`}
        >
          Mes
        </button>
        <button
          onClick={() => onView('week')}
          className={`px-2 py-1 ${view === 'week' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded mr-2`}
        >
          Semana
        </button>
        <button
          onClick={() => onView('day')}
          className={`px-2 py-1 ${view === 'day' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded mr-2`}
        >
          Día
        </button>
        <button
          onClick={() => onView('agenda')}
          className={`px-2 py-1 ${view === 'agenda' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
        >
          Agenda
        </button>
      </div>
    </div>
  );
};

export const Cale = () => {
  const {
    newEvent,
    setNewEvent,
    events,
    setEvents,
    setDeleteEventModal,
    setEventToDelete,
  } = useContext(AppContext);

  const [date, setDate] = useState(new Date());
  const [view, setView] = useState('month'); // Estado para la vista del calendario
  const [selectedDate, setSelectedDate] = useState(null); // Estado para el día seleccionado en el mini calendario
  const [isModalOpenCale, setIsModalOpenCale] = useState(false);

  useEffect(() => {
    if (selectedDate) {
      setDate(selectedDate);
      setView('day');
    }
  }, [selectedDate]);

  const handleAddEvent = () => {
    setEvents([
      ...events,
      {
        title: `${newEvent.title} (Asignado a: ${newEvent.assignedTo})`,
        start: dayjs(newEvent.start).toDate(),
        end: dayjs(newEvent.end).toDate(),
      },
    ]);
    setNewEvent({ title: '', start: '', end: '', assignedTo: '' });
    setIsModalOpenCale(false);
  };

  const handleSelectEvent = (event) => {
    setEventToDelete(event);
    setDeleteEventModal(true);
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };
  const { user } = useContext(AppContext);
  const navItems = [
    { route: "/Cale", content: "Calendario" },
    { route: "/Rol", content: "Roles" },
    { route: "/Stock", content: "Productos" }
  ];

  return (
    <>
    <HeaderUser
      navItems={navItems}
      username={user ? `${user.nombre} ${user.apellido}` : "Usuario"}
    />
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-4">
        <div className="flex items-center space-x-4 justify-between w-full mx-[15px]">
          <ModalCreateTask
            isOpen={isModalOpenCale}
            onClose={() => setIsModalOpenCale(false)}
            handleAddEvent={handleAddEvent}
          />
          {/* Botón Crear Evento */}
          <h3 className="text-lg font-semibold mb-2">Mis calendarios</h3>
          <button
            onClick={() => setIsModalOpenCale(true)}
            className="px-4 py-2  bg-blue-500 text-white rounded-md shadow hover:shadow-lg"
          >
            Crear Evento
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white px-[30px]">


          {/* Mini calendario */}
          <MiniCalendar
            onChange={handleDayClick}
            value={date}
            className="rounded-lg shadow-md mb-4"
            tileClassName="hover:bg-blue-200"
            onClickDay={(value) => handleDayClick(value)}
          />

          {/* Mini agenda */}
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

        {/* Calendar */}
        <main className="flex-1 p-4">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            view={view} // Controla la vista actual
            onView={(newView) => setView(newView)} // Actualiza la vista al cambiar
            onSelectEvent={handleSelectEvent}
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
              noEventsInRange: 'No hay eventos en este rango.',
              showMore: (total) => `+ Ver más (${total})`,
            }}
            components={{
              toolbar: CustomToolbar,
            }}
            className="bg-white rounded-md shadow-lg p-4"
          />
          <DeleteEventModal />
        </main>
      </div>
    </div>
    </>
  );
};

export default Cale;
