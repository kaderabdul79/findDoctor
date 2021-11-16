import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/notfound">NotFound</Link>
        </div>
    );
};

export default Header;