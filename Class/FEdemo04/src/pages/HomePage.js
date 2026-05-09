import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function HomePage(props) {
    return (
        <div className='row'>
            <h1>Home Page</h1>

            <Outlet />
        </div>
    );
}

export default HomePage;