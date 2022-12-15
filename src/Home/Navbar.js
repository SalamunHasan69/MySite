import React from 'react';
import { Link } from 'react-scroll';


const Navbar = () => {

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
    <header className="px-4 pt-4 lg:px-16 text-white">
      <div className="container flex justify-between items-center h-16 mx-auto">

        {/* <Link className='cursor-pointer'><h3 className='text-3xl lg:text-4xl font-bold italic text-primary'>Salamun</h3></Link> */}

        <Link to='' className='cursor-pointer'><img className='w-12 h-14 flex justify-start items-start' src="/img/logo.SH.png" alt="" /></Link>

        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link to="about" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'>ABOUT</Link>
          </li>
          <li className="flex">
            <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'>PORTFOLIO</Link>
          </li>
          <li className="flex">
            <Link to="blog" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'>BLOG</Link>
          </li>
          <li className="flex">
            <Link to="skill" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'>SKILL</Link>
          </li>
          <li className="flex">
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'>CONTACT</Link>
          </li>
          <li className="flex">
            <button onClick={handleResume} className='btn btn-outline btn-primary'>Resume</button>
          </li>
        </ul>
        <div className='dropdown md:hidden'>
          <button tabIndex={0} className="flex btn-primary rounded-sm justify-end p-2 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          {/* <div className='w-[400px] absolute'>
            <ul tabIndex={0} className='menubar menu-compact dropdown-content bg-gray-800 w-full p-5 ml-[-360px]'>
              <Link><li className='py-2'>ABOUT</li></Link>
              <Link><li className='py-2'>SKILL</li></Link>
              <Link><li className='py-2'>PORTFOLIO</li></Link>
              <Link><li className='py-2'>CONTACT</li></Link>
            </ul>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;