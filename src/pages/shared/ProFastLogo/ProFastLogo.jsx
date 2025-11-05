import React from 'react';

import logo from "../../../assets/logo.png"

const ProFastLogo = () => {
    return (
        <div className='flex items-end '>
            <img src={logo} className='mb-2' alt="" />
            <p className='text-3xl -ml-4 font-extrabold'>ProFast</p>
        </div>
    );
};

export default ProFastLogo;