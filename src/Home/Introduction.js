import React from 'react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import Effect from './Effect';

const Introduction = () => {

  const handleResume = (() => {
    fetch("/Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Salamun Hasan";
        alink.click();
      });
    });
  });

  return (
    <div className='h-[100vh] flex text-center lg:text-left justify-center items-center lg:justify-start lg:ml-56 '>
      <Effect></Effect>
      <div>
        <h4 className='text-primary text-xl lg:text-2xl font-medium'>Hello! I'm</h4>
        <h1
          className='pb-3 text-white text-4xl lg:text-7xl font-bold'>
          <Typewriter
            options={{
              strings: ['Salamun Hasan'],
              autoStart: true,
              cursor: '❤️',
              loop: true,
            }}
          /></h1>
        <h3 className='text-primary text-2xl lg:text-4xl font-semibold'>Web Developer</h3>
        <div>
          <ul className='list-disc list-inside marker:text-primary lg:inline-flex gap-6 my-3'>
            <li className='text-white font-semibold text-lg'>Front-End Developer</li>
            <li className='text-white font-semibold text-lg'>React Developer</li>
            <li className='text-white font-semibold text-lg'>MERN stack Developer</li>
          </ul>
        </div>
        <button onClick={handleResume} className='btn btn-primary mr-2'>Get Resume</button>
        <Link to='about'><button className='btn btn-outline btn-primary'>About Me</button></Link>
      </div>
    </div>
  );
};

export default Introduction;