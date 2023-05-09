import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='text-lg mx-5' to='/'>Home</Link>
            <Link className='text-lg mx-5' to='/update'>Update</Link>
        </div>
    );
};

export default Header;