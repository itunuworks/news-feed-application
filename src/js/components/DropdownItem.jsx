import React from 'react';
import PropTypes from 'prop-types';

/**
 * This Module returns an option item for a dropdownbox.
 *
 * @function DropdownItem
 * @param {any} props - Properties for the jsx component
 * @returns {jsx} - React Component
 */
const DropdownItem = (props) => {
  const { value, text } = props;

  return (
    <option value={value}>{text}</option>
  );
};

// Proptype validation.
DropdownItem.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default DropdownItem;

