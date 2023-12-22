import React from 'react';
import useTitle from '../../../../hooks/useTitle';

const AdminHome = () => {
    useTitle('Dashboard');
    
    return (
        <div className='bg-[#F1F5F9] h-full'>
            <h1>Admin Home</h1>
        </div>
    );
};

export default AdminHome;