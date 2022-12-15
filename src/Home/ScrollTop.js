import React, { useEffect, useState } from 'react';
import { FaChevronCircleUp } from "react-icons/fa";


const ScrollTop = () => {

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      }
      else {
        setShowScroll(false);
      };
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {
        showScroll && <FaChevronCircleUp className='fixed bottom-3 lg:bottom-5 right-3 lg:right-7 h-12 w-12 bg-white text-primary rounded-full cursor-pointer hover:bg-primary hover:text-white' onClick={scrollToTop}></FaChevronCircleUp>
      }
    </div>
  );
};

export default ScrollTop;