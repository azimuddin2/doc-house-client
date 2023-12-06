import React, { useState } from 'react';
import AppointmentCalendar from '../AppointmentCalendar/AppointmentCalendar';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import useTitle from '../../../hooks/useTitle';
import PageCover from '../../../components/PageCover/PageCover';

const Appointment = () => {
    useTitle('Appointment');
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <PageCover subTitle={'Appointment'} title={'Appointment'}></PageCover>
            <AppointmentCalendar date={date} setDate={setDate}></AppointmentCalendar>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;