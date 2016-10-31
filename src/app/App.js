import React, { PropTypes } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import './_styles.scss';

/**
 * Application component
 */
const App = ({ children }) => (
  <div className="page-wrapper">
    <Header />
    <main className="page-content">
      {children}
    </main>
    <Footer />
  </div>
);

/**
 * propTypes
 * @property {ReactElement} children to be rendered
 */
App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
