import React from 'react';
import charity from '../../assets/charity.jpg'
import bkash from '../../assets/BKash-Icon-Logo.wine.svg'
import ibbl from '../../assets/Islami_bank.svg.png'
import nagad from '../../assets/Nagad-Vertical-Logo.wine.svg'

const Donation = () => {
    return (
       <div>
            <div style={{fontFamily:"Aleo", letterSpacing:"2px"}} className="hero my-8">
        <div className="lg:hero-content flex-col lg:flex-row-reverse">
            <img className='w-96 rounded-2xl' src={charity} alt="" />
            <div className='p-6'>
                <div>
                    <h1 style={{
                        color:"#22a55a"
                    }} className='text-6xl font-bold'>Donate <span  className='text-5xl text-black font-medium'>& be</span> </h1>
                    <h1 className='text-5xl font-medium'>Part of This</h1>
                    <h1 className='text-5xl font-medium'>Sadaqah Jariyah</h1>
                </div>
                <p className="py-6 w-2/3 text-justify">You are about to make a difference in the lives of thousands of Muslims. Your contribution will be used to address the digital needs of the Ummah, in sha Allah.</p>
            </div>
        </div>
    </div>
                
                <div style={{
                    fontFamily:"aleo"
                }} className='py-10'>
                    
                <div className='bg-base-200 p-10'>
                    <div className='flex justify-center'>
                        <h2 className='text-4xl pb-5'>Details</h2>
                    </div>
                    
                <div className='pb-4'>
                    <div className='flex justify-center items-center gap-8'>
                       <div className='flex justify-center items-center'>
                       <img className='w-20' src={bkash} alt="" />
                    <h1 className='text-xl font-medium text-green-600'>Bkash</h1>
                       </div>
                    <h1 className='text-xl font-medium text-green-600'>+8801721778884 (Personal)</h1>
                    </div>
                </div>
                <div className='pb-4'>
                    <div className='flex justify-center items-center gap-8'>
                       <div className='flex justify-center items-center'>
                       <img className='w-24' src={nagad} alt="" />
                    <h1 className='text-xl font-medium text-green-600'>Nagad</h1>
                       </div>
                    <h1 className='text-xl font-medium text-green-600'>+8801721778884 (Personal)</h1>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center gap-8'>
                       <div className='flex justify-center items-center'>
                       <img className='w-12' src={ibbl} alt="" />
                    <h1 className='text-xl font-medium text-green-600 ml-5'>IBBL</h1>
                       </div>
                    <h1 className='text-xl font-medium text-green-600'>20500170201267618 (Account)</h1>
                    </div>
                </div>
                </div>





                </div>

       </div>
    );
};

export default Donation;