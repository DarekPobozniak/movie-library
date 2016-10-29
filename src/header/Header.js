import React from 'react';
import { Link } from 'react-router';

import './_styles.scss';

const Header = () => (
  <header className="page-header">
    <div className="wrapper">
      <h1 className="page-title"><Link to="/">Movie Library</Link></h1>
    </div>
  </header>
);

export default Header;
