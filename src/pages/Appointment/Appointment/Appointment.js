import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentCalendar from '../AppointmentCalendar/AppointmentCalendar';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <AppointmentCalendar date={date} setDate={setDate}></AppointmentCalendar>
        </div>
    );
};

export default Appointment;