import React from 'react';
import { mount } from 'enzyme';
import * as NewsItemImport from '../../src/js/components/NewsItem';

const NewsItem = NewsItemImport.NewsItem;

describe('The NewsItem Component', () => {
  const wrapper = mount(
    <NewsItem
      author="Itunuloluwa"
      title="The change we crave"
      description="An indepth exposition into the birth of the new Nigeria"
      url="http://www.book.com"
      urlToImage="http://imageurl.com"
    />
  );

  it('should render as a member of class item', () => {
    expect(wrapper.is('.item'));
  });

  it('allows us to set props', () => {
    expect(wrapper.props().author).toBe('Itunuloluwa');
    wrapper.setProps({ author: 'Andela Developer' });
    expect(wrapper.props().author).toBe('Andela Developer');
  });
});
