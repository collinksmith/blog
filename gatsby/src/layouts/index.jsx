import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children()}
      <Footer />
    </div>
  );
}
