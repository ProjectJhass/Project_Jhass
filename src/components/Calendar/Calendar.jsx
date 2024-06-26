import React from 'react';
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from 'dayjs';
export const Calendar = () => {
    const localizer = dayjsLocalizer(dayjs);

  return (
    <div className="flex justify-center items-center h-screen">
    <Calendar 
      localizer={localizer}
      style={{ height: '100vh', width: '100vw' }}
      className="shadow-lg border border-gray-200"
    />
  </div>
  )
}
