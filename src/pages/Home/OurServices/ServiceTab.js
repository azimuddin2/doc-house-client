import React from 'react';
import OurServiceCard from './OurServiceCard';

const ServiceTab = ({ items }) => {

    return (
        <div>
            {
                items.map(item => <OurServiceCard
                    key={item._id}
                    item={item}
                ></OurServiceCard>)
            }
        </div>
    );
};

export default ServiceTab;