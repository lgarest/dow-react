/* 3rd party imports */
import React from 'react';
import { func, node } from 'prop-types';


const Button = ({ click, children }) => (
  <button onClick={click}>
    {children}
  </button>
);

Button.propTypes = {
  click: func,
  children: node.isRequired,
};
Button.defaultProps = {
  click: () => {},
};

export default Button;
