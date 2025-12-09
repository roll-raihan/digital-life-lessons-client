import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;