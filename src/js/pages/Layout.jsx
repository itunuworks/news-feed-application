import React from 'react';

export default function Layout(props) {
  return (
    <div>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: React.PropTypes.element,
};

Layout.defaultProps = {
  children: '',
};

