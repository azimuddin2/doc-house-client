import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            style={{
                color: match ? '#F7A582' : '#F3F3F3',
                fontWeight: match ? '700' : '500',
                borderBottom: match ? '2px solid #F7A582' : 'none',
                borderRadius: '0',
                marginRight: '4px'
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;