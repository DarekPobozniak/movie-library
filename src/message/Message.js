import React, { PropTypes } from 'react';

import './_styles.scss';

const Message = ({ type = 'info', children }) => {
  const classList = `message message--${type}`;

  return (
    <p className={classList}>{children}</p>
  );
};

Message.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['alert', 'info']),
};

export default Message;
