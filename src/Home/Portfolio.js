import React, { useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
// import Link from 'react-scroll/modules/components/Link';
// import PortfolioDetails from './PortfolioDetails';

const Portfolio = () => {

  const sites = [
    {
      id: 1,
      name: 'Photo Care',
      title: 'Online photographer service review',
      info: 'Technology: React Js, React-Router, JavaScript, Tailwind CSS, Node Js, Express Js, MongoDB, Firebase etc',
      detail: 'Service restriction in the home page || Email/password based and google login authentication || User can send his/her personal review',
      img: '/p-img/p11.png',
      link: 'https://photo-care-5bee8.web.app/',
      github: 'https://github.com/SalamunHasan69/photo-care-client'
    },
    {
      id: 2,
      name: 'Smart Shop',
      title: 'MERN stack resale market',
      info: 'Technology: React Js, React-Router, JavaScript, Tailwind CSS, Node Js, Express Js, MongoDB, Firebase etc',
      detail: 'acsbbsnksdfdkfd',
      img: '/p-img/p22.png',
      link: 'https://smart-shop-fb7f1.web.app/',
      github: 'https://github.com/SalamunHasan69/smart-shop-client'
    },
    {
      id: 3,
      name: 'Car Doctor',
      title: 'Car service center',
      info: 'Technology: React Js, React-Router, JavaScript, Tailwind CSS, Node Js, Express Js, MongoDB (CRUD operations), Firebase etc',
      detail: '',
      img: '/p-img/p33.png',
      link: 'https://masterpiece-84820.web.app/',
      github: 'https://github.com/SalamunHasan69/car-doctor-client'
    },
    {
      id: 4,
      name: 'Virtual King',
      title: 'Online learning platform',
      info: 'Technology: React Js, React-Router, JavaScript, Bootstrap, Firebase, MongoDB etc',
      detail: '',
      img: '/p-img/p5.png',
      link: 'https://virtual-king-5661c.firebaseapp.com/',
      github: 'https://github.com/SalamunHasan69/virtual-king-client'
    },
    // {
    //   id: 5,
    //   name: '',
    //   info: '',
    //   img: '',
    //   link: '',
    // },
    // {
    //   id: 6,
    //   name: '',
    //   info: '',
    //   img: '',
    //   link: '',
    // },
    // {
    //   id: 7,
    //   name: '',
    //   info: '',
    //   img: '',
    //   link: '',
    // },
  ]

  const [visible, setVisible] = useState(2);
  const handleMore = () => {
    setVisible((preValue) => preValue + 1);
  };

  // const [showModal, setShowModal] = useState(false);

  return (
    <div className='pt-16 lg:pt-40' id='portfolio'>
      <h2 className='text-center text-white text-3xl'>MY RECENT <span className='text-primary'>PROJECTS</span></h2>
      <div className='divider w-24 mx-auto'></div>
      <div className='divider w-16 mx-auto'></div>

      <div className='lg:mt-10'>
        {
          sites.slice(0, visible).map(site => <div
            key={site.id}>
            <div className='grid grid-cols-1 md:grid-cols-2 mb-7'>
              <div data-aos="zoom-in-right" className='lg:w-1/2 mx-auto flex lg:items-center'>
                <PhotoProvider>
                  <PhotoView src={site.img}>
                    <img src={site.img} alt='' className="rounded-lg shadow-2xl cursor-pointer overflow-scroll h-[232px] w-[360px]" />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div data-aos="zoom-in-left" className='lg:w-1/2 flex lg:items-center ml-3'>
                <div>
                  <h1 className="text-5xl font-bold text-white">{site.name}</h1>
                  <h3 className='text-2xl font-semibold text-white my-5'>{site.title}</h3>
                  <ul className='mb-5 list-disc list-inside marker:text-primary'><li
                    className='text-white text-lg'>
                    {site.info}
                  </li>
                  </ul>
                  <div>
                    <a target='blank' className='btn btn-primary' href={site.link}>Live site</a>
                    <a target='blank' className='btn btn-primary btn-outline mx-4' href={site.github}>GitHub</a>
                    {/* <Link to='/projects/:id'><button className="btn btn-primary">Details</button></Link> */}
                    {/* onClick={() => setShowModal(true)} */}
                  </div>
                </div>
              </div>
            </div>
          </div>)
        }
      </div>

      {/* Show More Button */}
      <div className='text-center mt-5 mb-20'>
        <button onClick={handleMore} className='btn btn-outline btn-primary'>Show More</button>
      </div>

      {/* Modal Details */}

      {/* <PortfolioDetails
        isVisible={showModal} onClose={() => setShowModal(false)} sites={sites}>
      </PortfolioDetails> */}

    </div>
  );
};

export default Portfolio;