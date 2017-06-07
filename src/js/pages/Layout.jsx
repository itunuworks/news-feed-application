import React from 'react';
import PropTypes from 'prop-types';

/**
 * This function returns a div component containing several other components.
 *
 * @function Layout
 * @export
 * @param {any} props
 * @returns {jsx} - React Component
 */
const Layout = props => (
  <div>
    <div className="container">
      {props.children}
    </div>
  </div>
);

// Proptype validation.
Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: '',
};

export default Layout;
