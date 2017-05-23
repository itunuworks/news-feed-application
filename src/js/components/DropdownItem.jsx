import React from 'react';

/**
 * This Module returns an option item for a dropdownbox.
 *
 * @function DropdownItem
 * @param {object} props - Properties for the jsx component
 * @returns {JSX Component}
 */
const DropdownItem = (props) => {
  const { value, text } = props;

  return (
    <option value={value}>{text}</option>
  );
};

// Proptype validation.
DropdownItem.propTypes = {
  value: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default DropdownItem;

