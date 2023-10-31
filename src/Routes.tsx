import React, { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const SkillPage = lazy(() => import('./pages/SkillPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TestPage = lazy(() => import('./pages/Test'));
const Error = lazy(() => import('./pages/404/Error'));


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
        <Route path="/" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path='service' element={<ServicePage/>} ></Route>
        <Route path='portfolio' element={<PortfolioPage />} ></Route>
        <Route path="skills" element={<SkillPage/>}>
            <Route path="job" element={<TestPage/>}/>
        </Route>
        <Route path="contact" element={<ContactPage/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Route>
      </React.Fragment>
    )
  );
  return routes;
}