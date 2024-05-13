import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Layout = ({ children, title }) => {
  return (
    <>
      {title && (
        <Helmet>
          <title>{title}</title>
        </Helmet>
      )}
      <div className='bg-white'>
        <Navbar />
        <div className=' '>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
