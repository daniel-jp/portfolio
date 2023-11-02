import React, { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const wait = (time: number | undefined) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
const pages ={
HomePage : lazy(() => wait(600).then(() => import('./pages/Home'))),
AboutPage : lazy(() => wait(600).then(() => import('./pages/AboutPage'))),
ServicePage : lazy(() => wait(600).then(() => import('./pages/ServicePage'))),
PortfolioPage : lazy(() => wait(600).then(() =>  import('./pages/PortfolioPage'))),
SkillPage : lazy(() => wait(600).then(() =>  import('./pages/SkillPage'))),
ContactPage : lazy(() => wait(600).then(() =>  import('./pages/ContactPage'))),
TestPage : lazy(() => wait(600).then(() =>  import('./pages/Test'))),
Error : lazy(() => wait(600).then(() =>  import('./pages/404/Error'))),
};



export default function Routes() {

  
   const routes = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>

        
      <Route>
        <Route path="/" element={<pages.HomePage/>}/>
        <Route path="about" element={<pages.AboutPage/>}/>
        <Route path="service" element={<pages.ServicePage/>} ></Route>

        <Route path="portfolio" element={<pages.PortfolioPage />} >
             <Route path="job" element={<pages.TestPage/>}/>
        </Route>

        <Route path="skills" element={<pages.SkillPage/>}>
            <Route path="job" element={<pages.TestPage/>}/>
        </Route>
        
        <Route path="contact" element={<pages.ContactPage/>}></Route>
        <Route path="*" element={<pages.Error />}></Route>
      </Route>
      </React.Fragment>
    )
  );
  return routes;
}