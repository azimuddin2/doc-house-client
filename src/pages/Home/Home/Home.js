import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import Information from '../Information/Information';
import Testimonials from '../Testimonials/Testimonials';
import ExpertDoctors from '../ExpertDoctors/ExpertDoctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Information></Information>
            <Testimonials></Testimonials>
            <ExpertDoctors></ExpertDoctors>
        </div>
    );
};

export default Home;