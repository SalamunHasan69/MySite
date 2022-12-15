import React from 'react';
import Lottie from "lottie-react";
import Cycling from './Blog.json'
import Typewriter from 'typewriter-effect';

const Blog = () => {
  return (
    <div className='mt-16' id='blog'>
      <h2 className='text-center text-white text-3xl'>MY <span className='text-primary'>BLOGS</span></h2>
      <div className='divider w-24 mx-auto'></div>
      <div className='divider w-16 mx-auto'></div>
      <div className='lg:w-[80%] lg:pt-10 mx-auto grid lg:grid-cols-2'>
        <div className='flex justify-center items-center'>
          <h3 className='text-white text-4xl font-bold'>
            <Typewriter
              options={{
                strings: ['Blog coming soon'],
                autoStart: true,
                cursor: '...',
                loop: true,
              }}
            />
          </h3>
        </div>
        <div>
          <Lottie animationData={Cycling} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Blog;