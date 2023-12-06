import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className='mb-1 lg:mb-0'
            style={{
                background: match ? '#F7A582' : 'none',
                fontWeight: match ? '600' : '500',
                borderRadius: '2px',
                marginRight: '4px',
                color: '#fff',
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;