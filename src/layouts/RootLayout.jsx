import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-full bg-[#EAECED]'>
            <div className='max-w-[94%] mx-auto pt-8'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className='max-w-[94%] mx-auto'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default RootLayout;