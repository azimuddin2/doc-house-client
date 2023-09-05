import React, { useState } from 'react';
import doctor from '../../../assets/Images/doctor.png';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ServiceTab from './ServiceTab';
import './OurServices.css'; 

const OurServices = () => {
    const categories = ['cosmetic-dentistry', 'oral-surgery', 'gastrology-therapy'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const { data: services, isLoading, error } = useQuery({
        queryKey: ['our-services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/our-services');
            const data = await res.json();
            return data;
        }
    });

    const cosmeticDentistry = services?.filter(service => service.category === 'cosmetic-dentistry');
    const oralSurgery = services?.filter(service => service.category === 'oral-surgery');
    const gastrologyTherapy = services?.filter(service => service.category === 'gastrology-therapy');

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <p style={{ color: '#f91944', textAlign: 'center' }}>error: {error.message}</p>
    }

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 my-20 text-center lg:text-left'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div>
                    <img src={doctor} alt="Doctor" className='' />
                </div>
                <div className='mt-10'>
                    <div>
                        <h2 className=' text-4xl text-neutral font-bold'>Our Services</h2>
                        <p className='my-5 text-sm text-accent'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div className='mt-10'>
                        <Tabs defaultIndex={0} onSelect={(index) => setTabIndex(index)}>
                            <TabList>
                                <Tab>Cosmetic Dentistry</Tab>
                                <Tab>Oral Surgery</Tab>
                                <Tab>Gastrology Therapy</Tab>
                            </TabList>
                            <TabPanel>
                                <ServiceTab items={cosmeticDentistry}></ServiceTab>
                            </TabPanel>
                            <TabPanel>
                                <ServiceTab items={oralSurgery}></ServiceTab>
                            </TabPanel>
                            <TabPanel>
                                <ServiceTab items={gastrologyTherapy}></ServiceTab>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;