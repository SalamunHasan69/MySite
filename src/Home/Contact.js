import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";


const Contact = () => {

  return (
    <div className='pt-16 lg:pt-40' id='contact'>
      <h2 className='text-center text-white text-3xl'>GET IN <span className='text-primary'>TOUCH</span></h2>
      <div className='divider w-24 mx-auto'></div>
      <div className='divider w-16 mx-auto'></div>

      <div className='lg:pt-10 grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='w-[80%] mx-auto'>
          <p className='text-white lg:text-lg'>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
          <a className="btn btn-primary my-6" href="mailto:salamun2600@gmail.com">Contact Me</a>
          <div className='flex gap-6'>
            <a target="blank" href="https://github.com/SalamunHasan69"><FaGithub className='text-3xl'></FaGithub></a>
            <a target="blank" href="https://www.linkedin.com/in/salamunhasan69/"><FaLinkedinIn className='text-3xl'></FaLinkedinIn></a>
            <a target="blank" href="https://www.facebook.com/salamun.hasan.69"><FaFacebook className='text-3xl'></FaFacebook></a>
          </div>
        </div>
        <div className='w-[80%] mx-auto'>
          <div>
            <h4 className='text-2xl text-white font-bold'>Phone</h4>
            <p className='text-white'>+88 01644-517235</p>
          </div>
          <div className='my-4'>
            <h4 className='text-2xl text-white font-bold'>Email</h4>
            <p className='text-white'>salamun2600@gmail.com</p>
          </div>
          <div className='my-4'>
            <h4 className='text-2xl text-white font-bold'>Address</h4>
            <p className='text-white'>Jashore, Khulna, Bangladesh - 7402</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;