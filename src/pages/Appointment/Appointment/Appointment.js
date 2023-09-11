import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentCalendar from '../AppointmentCalendar/AppointmentCalendar';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <AppointmentCalendar date={date} setDate={setDate}></AppointmentCalendar>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;