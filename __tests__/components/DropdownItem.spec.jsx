import React from 'react';
import { mount } from 'enzyme';
import DropdownItem from '../../src/js/components/DropdownItem';

describe('The DropdownItem Component', () => {
  const wrapper = mount(
    <DropdownItem value="Alabama" text="Abuja" />
  );

  it('should render as a member of class item', () => {
    expect(wrapper.is('.item'));
  });

  it('allows us to set props', () => {
    expect(wrapper.props().value).toBe('Alabama');
    wrapper.setProps({ value: 'Jos Plateau' });
    expect(wrapper.props().value).toBe('Jos Plateau');
  });
});
