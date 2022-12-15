import React from 'react';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Hobbies from './Hobbies';
import Introduction from './Introduction';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import ProjectsDetails from './ProjectsDetails';
import ScrollTop from './ScrollTop';
import Skills from './Skills';

const Home = () => {

  return (
    <div>
      <Navbar></Navbar>
      <Introduction></Introduction>
      <About></About>
      <Portfolio></Portfolio>
      <Blog></Blog>
      <Skills></Skills>
      <Hobbies></Hobbies>
      <Contact></Contact>
      <Footer></Footer>
      <ScrollTop></ScrollTop>
      <ProjectsDetails></ProjectsDetails>
    </div>
  );
};

export default Home;