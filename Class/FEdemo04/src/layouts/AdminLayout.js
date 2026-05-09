import React from 'react';
import { Outlet } from 'react-router-dom';

function AdminLayout(props) {
    return (
        <div className='row'>
            <h1 className='bg-warning'>Day la header</h1>
                <Outlet/>
             <h1 className='bg-warning'>Day la footer</h1>
        </div>
    );
}

export default AdminLayout;