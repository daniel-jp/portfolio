import React, { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Home from './pages/Home';
import Test from './pages/Test';


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
        <Route path="/" element={<Home/>}/>
        <Route path="test" element={<Test/>}/>
      
      </Route>
      </React.Fragment>
    )
  );
  return routes;

}