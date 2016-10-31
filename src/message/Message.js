import React, { PropTypes } from 'react';

import './_styles.scss';

/**
 * Message component
 */
const Message = ({ type = 'info', children }) => {
  const classList = `message message--${type}`;

  return (
    <p className={classList}>{children}</p>
  );
};

/**
 * propTypes
 * @property {string} children - Text of a message
 * @property {string} type     - Type of a message ('alert', 'info')
 */
Message.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['alert', 'info']),
};

export default Message;
