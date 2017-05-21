import React from 'react';
// import newsStore from '../store/newsStore';

export default function DropdownItem(props) {
  const { value, text } = props;

  return (
    <option value={value}>{text}</option>
  );
}
DropdownItem.propTypes = {
  value: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
};

