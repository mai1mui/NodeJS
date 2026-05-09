import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function ClientLayout(props) {
    return (
        <div className='row'>
            <h1 className='bg-danger'>Day la header cua user</h1>
            <div className='col-3 bg-primary'>
                <Link to="/culi" className='text-white fw-bold me-3'>Lien He Cu li</Link>
                <Link to="/gd" className='text-white fw-bold'>Lien He Giam Doc</Link>
            </div>
            <div className='col-9 bg-success'>
                <Outlet />
            </div>
            <h1 className='bg-danger'>Day la footer user</h1>
        </div>
    );
}

export default ClientLayout;