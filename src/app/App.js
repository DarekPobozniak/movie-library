import React, { PropTypes } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const App = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
