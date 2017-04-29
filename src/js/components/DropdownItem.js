import React from 'react';

import newsStore from '../store/newsStore';

export default class DropdownItem extends React.Component{
  constructor(props) {
    super();
  }

  render() {
    const { value } = this.props;

    return (
      <option value={value}>{value}</option>
    );
  }
}

