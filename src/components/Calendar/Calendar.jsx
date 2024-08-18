import React, { useContext } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import es from 'date-fns/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import ModalCreateTask from './ModalCreateTask/ModalCreateTask';
import { AppContext } from '../Context/Context';
import DeleteEventModal from './ModalCreateTask/DeleteEvent/DeleteEvent';


dayjs.locale('es');

const locales = {
  'es': es,
};

const localizer = dateFnsLocalizer({
  format: (date, formatStr, options) => format(date, formatStr, { locale: locales['es'], ...options }),
  parse: (str, formatStr, options) => parse(str, formatStr, new Date(), { locale: locales['es'], ...options }),
  startOfWeek: (date, options) => startOfWeek(date, { locale: locales['es'], ...options }),
  getDay: (date, options) => getDay(date, { locale: locales['es'], ...options }),
  locales,
});

export const Cale = () => {
  const {
    isModalOpenCale,
    setIsModalOpenCale,
    newEvent,
    setNewEvent,
    events,
    setEvents,
    setDeleteEventModal,
    setEventToDelete
  } = useContext(AppContext);

  const handleAddEvent = () => {
    setEvents([
      ...events,
      {
        title: `${newEvent.title} (Asignado a: ${newEvent.assignedTo})`,
        start: dayjs(newEvent.start).toDate(),
        end: dayjs(newEvent.end).toDate(),
      },
    ]);
    setNewEvent({ title: '', start: '', end: '', assignedTo: '' }); // Resetea el formulario
    setIsModalOpenCale(false); // Cierra el modal después de agregar el evento
  };

  const handleSelectEvent = (event) => {
    setEventToDelete(event);
    setDeleteEventModal(true);  // Muestra el modal de confirmación de eliminación
  };

  return (
    <div>

      <button onClick={() => setIsModalOpenCale(true)} className="bg-blue-500 text-white p-2 rounded mb-4">
        Crear Nuevo Evento
      </button>
      <ModalCreateTask 
        isOpen={isModalOpenCale}
        onClose={() => setIsModalOpenCale(false)}
        handleAddEvent={handleAddEvent}
      />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, zIndex: 10 }}
        onSelectEvent={handleSelectEvent}
        messages={{
          next: "Sig.",
          previous: "Ant.",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          date: "Fecha",
          time: "Hora",
          event: "Evento",
          noEventsInRange: "No hay eventos en este rango.",
          showMore: (total) => `+ Ver más (${total})`,
        }}
      />

      <DeleteEventModal />
    </div>
  );
};

export default Cale;
