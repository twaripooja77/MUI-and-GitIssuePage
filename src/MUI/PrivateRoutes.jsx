import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Users from './Users';


const PrivateRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/userinfo" element={<Users/>} />

  
    </Routes>
    </>
  )
}

export default PrivateRoutes