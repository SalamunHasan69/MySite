import React from 'react';
import { CgYinyang } from "react-icons/cg";
import { CgCodeSlash } from "react-icons/cg";
import { AiOutlineGlobal } from "react-icons/ai";

const Hobbies = () => {

  return (
    <div className='mt-16'>
      <h2 className='text-center text-white text-3xl'>MY <span className='text-primary'>HOBBIES</span></h2>
      <div className='divider w-24 mx-auto'></div>
      <div className='divider w-16 mx-auto'></div>

      <div className='lg:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className=' bg-gray-800 mx-auto px-32 py-10 rounded-bl-3xl rounded-tr-3xl lg:pl-6 object-cover'>
          <CgCodeSlash className='text-primary text-7xl'></CgCodeSlash>
          <h3 className='text-3xl font-bold text-white'>Coding</h3>
        </div>
        <div className=' bg-gray-800 mx-auto px-32 py-10 rounded-bl-3xl rounded-tr-3xl lg:pl-6 object-cover'>
          <AiOutlineGlobal className='text-primary text-7xl'></AiOutlineGlobal>
          <h3 className='text-3xl font-bold text-white'>Traveling</h3>
        </div>
        <div className=' bg-gray-800 mx-auto px-32 py-10 rounded-bl-3xl rounded-tr-3xl lg:pl-6 object-cover'>
          <CgYinyang className='text-primary text-7xl'></CgYinyang>
          <h3 className='text-3xl font-bold text-white'>Karate</h3>
        </div>
      </div>

    </div>
  );
};

export default Hobbies;