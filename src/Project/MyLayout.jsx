import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Headerbar from './Headerbar';

const MyLayout = ({children}) => {
  return (
   <>
    <Header/>
   <Headerbar/>
    {children}
    <Footer/>
   </>
  )
}

export default MyLayout
