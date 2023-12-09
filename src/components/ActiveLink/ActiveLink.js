import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ActiveLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
        className='flex items-center mb-2'
            style={{
                color: match ? '#07332F' : '#898989',
                background: match ? '#F1F5F9': 'none',
                fontWeight: match ? '700': '500',
                borderLeft: match ? '3px solid #07332F' : 'none',
                borderRadius: '0px',
                fontSize: '16px'
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default ActiveLink;