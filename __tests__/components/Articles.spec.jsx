import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Articles from '../../src/js/components/Articles';
import newsStore from '../../src/js/store/newsStore';

describe('The Articles component', () => {
  it('should render as a member of class ui and container', () => {
    expect(shallow(<Articles />).is('.ui container'));
  });

  it('should successfully load a listener on mount', () => {
    sinon.spy(Articles.prototype, 'componentDidMount');
    mount(<Articles />);
    expect(Articles.prototype.componentDidMount.calledOnce).toBe(true);
  });

  it('should call setState on a call to getArticles', () => {
    sinon.spy(Articles.prototype, 'setState');
    mount(<Articles />);
    expect(Articles.prototype.setState.calledOnce).toBe(false);
  });

  it('should call function getArticles on successful mount', () => {
    const spy = sinon.spy(Articles.prototype, 'getArticles');
    const wrapper = mount(<Articles />);
    newsStore.on = jest.fn(() => (
      wrapper.instance().getArticles()
    ));
    wrapper.instance().componentDidMount();
    expect(spy.calledOnce).toBe(true);
  });

  describe('the behavior of componentWillUnmount', () => {
    const spy = sinon.spy(Articles.prototype, 'componentWillUnmount');
    let wrapper = mount(<Articles />);

    it('should call the componentWillUnmount function on unmount', () => {
      wrapper.unmount();
      expect(spy.callCount).toBe(1);
    });

    it('should call newsStore.removeListener on unmount', () => {
      let callCount = 0;
      wrapper = mount(<Articles />);
      newsStore.removeListener = jest.fn(() => {
        callCount += 1;
      });
      wrapper.unmount();
      expect(callCount).toBe(1);
    });
  });
});
