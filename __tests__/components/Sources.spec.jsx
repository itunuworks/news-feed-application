import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Sources from '../../src/js/components/Sources';
import newsStore from '../../src/js/store/newsStore';
import localStorage from '../../src/js/__mocks__/localStorageMock';

describe('The Sources Component', () => {
  window.localStorage = localStorage;
  it('should render as a member of class item', () => {
    const wrapper = shallow(<Sources />);
    expect(wrapper.is('.item.container'));
  });

  describe('The behavior of the Component', () => {
    const mountSpy = sinon.spy(Sources.prototype, 'componentDidMount');
    const unmountSpy = sinon.spy(Sources.prototype, 'componentWillUnmount');
    const reloadSourcesSpy = sinon.spy(Sources.prototype, 'reloadSources');
    const reloadArticlesStub = sinon.stub(
      Sources.prototype, 'reloadArticles'
    );
    const getArticlesStub = sinon.stub(
      Sources.prototype, 'getArticles'
    );
    const wrapper = mount(<Sources />);

    afterEach(() => {
      reloadSourcesSpy.reset();
      reloadArticlesStub.reset();
      getArticlesStub.reset();
    });

    it('should call function reloadSources when initialized', () => {
      expect(reloadSourcesSpy.callCount).toBeGreaterThan(0);
    });

    it('should call function componentDidMount when mounted', () => {
      expect(mountSpy.callCount).toBeGreaterThan(0);
    });

    it('should call function componentWillUnmount when unmounted', () => {
      wrapper.unmount();
      expect(unmountSpy.callCount).toEqual(1);
    });

    it('should call newsStore.removeListener on unmount', () => {
      let callCount = 0;
      wrapper.mount();
      newsStore.removeListener = jest.fn(() => {
        callCount += 1;
      });
      wrapper.unmount();
      expect(callCount).toBe(1);
    });

    describe('The behavior of the Dropdowns when changed', () => {
      const sourceMount = shallow(<Sources />);
      describe('The filter Dropdown', () => {
        it('should call function reloadArticles', () => {
          sourceMount.find('#filterSelector').simulate(
            'change', null, { value: 'top' }
          );
          expect(reloadArticlesStub.callCount).toEqual(1);
        });
      });

      describe('The news Source Dropdown', () => {
        it('should call function reloadArticles', () => {
          sourceMount.find('#newsSourceSelector').simulate(
            'change', null, { value: 'top' }
          );
          expect(reloadArticlesStub.callCount).toEqual(1);
        });
      });
    });
  });
});
