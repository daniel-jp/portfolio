import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import About from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import ServicePage from './pages/ServicePage';
import SkillPage from './pages/SkillPage';
import Test from './pages/Test';


export default function Routes() {

/*
  const wait = (time: number | undefined) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };*/

  
   const routes = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
      <Route>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path='service' element={<ServicePage/>} ></Route>
        <Route path='portfolio' element={<PortfolioPage />} ></Route>
        <Route path="skills" element={<SkillPage/>}>
        <Route path="job" element={<Test/>}/>
        </Route>
        <Route path="contact" element={<ContactPage/>}></Route>
        

      
      </Route>
      </React.Fragment>
    )
  );
  return routes;

}