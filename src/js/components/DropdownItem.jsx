import React from 'react';
// import newsStore from '../store/newsStore';

export default class DropdownItem extends React.Component {
  render() {
    const { value, text} = this.props;

    return (
      <option value={value}>{text}</option>
    );
  }
}

