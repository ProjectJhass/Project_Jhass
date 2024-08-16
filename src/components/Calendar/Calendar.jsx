import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import es from 'date-fns/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

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
  const [events, setEvents] = useState([
    {
      title: 'Reunión',
      start: new Date(2023, 7, 7, 10, 0),
      end: new Date(2023, 7, 7, 12, 0),
    },
  ]);

  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '', assignedTo: '' });

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
  };

  return (
    <div>
      <div className="form-container">
        <input
          type="text"
          placeholder="Título"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="datetime-local"
          placeholder="Inicio"
          value={newEvent.start}
          onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
        />
        <input
          type="datetime-local"
          placeholder="Fin"
          value={newEvent.end}
          onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
        />
        <input
          type="text"
          placeholder="Asignado a"
          value={newEvent.assignedTo}
          onChange={(e) => setNewEvent({ ...newEvent, assignedTo: e.target.value })}
        />
        <button onClick={handleAddEvent}>Agregar Evento</button>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
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
    </div>
  );
};

export default Cale;