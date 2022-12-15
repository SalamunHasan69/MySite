import React from 'react';
import { Link } from 'react-scroll';

const About = () => {

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
    <div id='about'>
      <h2 className='text-center text-white text-3xl'>ABOUT <span className='text-primary'>ME</span></h2>
      <div className='divider w-24 mx-auto'></div>
      <div className='divider w-16 mx-auto'></div>

      <div className="hero lg:pt-10">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          <img className='h-72 w-72 lg:h-96 lg:w-96 hover:scale-110 cursor-pointer transition duration-500 lg:mx-36 lg:ml-0 rounded-full lg:rounded-md grayscale hover:grayscale-0' src="/img/me.2.jpg" alt="Salamun" />
          <div>
            <div className='w-[80%] mx-auto'>
              <p className='text-white lg:text-lg mb-5'>
                I'm Salamun Hasan from Bangladesh. I'm studying Bachelor of Business Administration (BBA) at Cantonment College, Jashore. I'm also a Junior Web developer. My core skill is based on Frontend, React-JS and I love to do most of the things using React-JS. My dream is to be a big web developer. I'm interested in Programming. My mission is to learn new technologies.
              </p>
              <button onClick={handleResume} className='btn btn-primary'>Get Resume</button>
              <Link to='skill'><button className='btn btn-primary btn-outline ml-2'>MySkills</button></Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;