import React from 'react';
import error from '../../../assets/404.png'

const Error = () => {
    return (
        <div className='min-h-screen p-10'>
            <img className='rounded-2xl' src={error} alt="" />
        </div>
    );
};

export default Error;