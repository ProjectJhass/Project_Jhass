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
import DeleteEventModal from './DeleteEvent/DeleteEvent';
import HeaderUser from '../Layouts/HeaderUser/HeaderUser';
import { Footer } from '../Layouts/Footer/Footer';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

dayjs.locale('es');

const localizer = dayjsLocalizer(dayjs);

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

// Modal para seleccionar si se quiere crear Evento o Tarea
const CreateSelectModal = ({ isOpen, onClose, onCreateEvent, onCreateTask }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">¿Qué quieres crear?</h2>
        <div className="flex justify-between">
          <button
            onClick={onCreateEvent}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
          >
            Evento
          </button>
          <button
            onClick={onCreateTask}
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600"
          >
            Tarea
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
        >
          Cancelar
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
  const [view, setView] = useState('month');
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpenCale, setIsModalOpenCale] = useState(false);
  const [isCreateSelectModalOpen, setIsCreateSelectModalOpen] = useState(false);

  const navigate = useNavigate(); // Inicializar navigate

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

  const handleCreateEvent = () => {
    navigate('/crear-evento'); // Redirigir a la ruta para crear eventos
    setIsCreateSelectModalOpen(false); // Cerrar modal de selección
  };

  const handleCreateTask = () => {
    navigate('/crear-tarea'); // Redirigir a la ruta para crear tareas
    setIsCreateSelectModalOpen(false); // Cerrar modal de selección
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
            {/* Botón Crear */}
            <h3 className="text-lg font-semibold mb-2">Mis calendarios</h3>
            <button
              onClick={() => setIsCreateSelectModalOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:shadow-lg"
            >
              Crear
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
              view={view}
              onView={(newView) => setView(newView)}
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
              }}
              components={{
                toolbar: CustomToolbar,
              }}
            />
          </main>
        </div>
      </div>
      <Footer />

      {/* Modal para crear evento o tarea */}
      <CreateSelectModal
        isOpen={isCreateSelectModalOpen}
        onClose={() => setIsCreateSelectModalOpen(false)}
        onCreateEvent={handleCreateEvent}
        onCreateTask={handleCreateTask}
      />

      {/* Modal para crear evento específico */}
      {isModalOpenCale && (
        <ModalCreateTask
          closeModal={() => setIsModalOpenCale(false)}
          handleAddEvent={handleAddEvent}
        />
      )}
    </>
  );
};
