import React, { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import About from './pages/AboutPage';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import ServicePage from './pages/ServicePage';


export default function Routes() {


  const wait = (time: number | undefined) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };

  
   const routes = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
      <Route>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path='service' element={<ServicePage/>} ></Route>
        <Route path='/' element={<PortfolioPage />} ></Route>
      
      </Route>
      </React.Fragment>
    )
  );
  return routes;

}