import React from 'react';
import PropTypes from 'prop-types';

export default function CheckPassword(props) {
  const { min, password, children } = props;
  const remaining = min - password.length
  if (typeof children === 'function') {
    return children(remaining);
  } else {
    return (
      <>Enter {remaining} more characters</>
    );
  }
}

CheckPassword.propTypes = {
  text: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired
};
