import React from 'react';

/**
 * This function returns a div component containing several other components.
 *
 * @function Layout
 * @export
 * @param {object} props
 * @returns {JSX Component}
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
  children: React.PropTypes.element,
};

Layout.defaultProps = {
  children: '',
};

export default Layout;
