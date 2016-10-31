import React from 'react';

import './_styles.scss';

/**
 * Not Found component
 * @return {ReactElement} markup
 */
const NotFound = () => (
  <div className="wrapper">
    <h2 className="not-found"><span>Ops...</span> Page not found</h2>
  </div>
);

export default NotFound;
