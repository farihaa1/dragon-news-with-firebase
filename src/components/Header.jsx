import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 py-2'>
           <div className='w-5/12 mx-auto'>.
            <img className='w-full h-full' src={logo} alt="" />
           </div>
           <h2 className='text-gray-500 text-base'>Journalism Without Fear or Favour</h2>
           <p className='text-gray-600 text-sm'>{moment().format('dddd, MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;