import React from 'react';
import error from '../../../assets/errors.png'

const Error = () => {
    return (
        <div className='min-h-screen p-10 flex justify-center items-center'>
            <img className='rounded-2xl' src={error} alt="" />
        </div>
    );
};

export default Error;