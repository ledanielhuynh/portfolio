import React from 'react';
import { ReactComponent as ArrowUpRight } from '../assets/arrow-up-right.svg';

const Navbar = () => {
  return (
    <nav className='absolute w-full bg-900/50 text-white backdrop-blur-lg z-50'>
      <div className='inline-flex px-8 py-4 justify-between items-center w-full'>
        <button className='font-cd font-bold text-100 text-4xl'>huynh.</button>
        <div className='flex flex-row gap-4 font-sg'>
          <button className='flex gap-1 rounded-full px-2 py-1 text-50'>
            <p className='font-bold'>PROJECTS</p>
          </button>
          <button className='flex gap-1 rounded-full px-4 py-1 text-50'>
            <p className='font-bold'>ABOUT ME</p>
          </button>
          <button className='flex gap-1 rounded-full px-4 py-1 text-50 outline outline-50 transition ease-in-out hover:bg-600 duration-300'>
            <p className='font-bold'>RESUME</p>
            <ArrowUpRight className='w-6 h-6 text-current' />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
