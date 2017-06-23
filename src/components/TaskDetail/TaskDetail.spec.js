import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import TaskDetail from './';

const mountWithStore = state => element => {
  const store = createStore(x => x, state || {});
  return mount(<Provider store={store}>{element}</Provider>);
};

const mountTaskDetail = (state, props) => {
  const wrapper = mountWithStore(state)(<TaskDetail {...props} />);
  return wrapper.find('TaskDetail');
};


describe('components/TaskDetail', () => {
  it('should render the correct props', () => {
    const props = {
      title: 'title 1',
      description: 'description 1',
      isRequired: {}
    }
    const component = mountTaskDetail(null, props);

    expect(component.prop('title')).toBe('title 1');
    expect(component.prop('description')).toBe('description 1');
  });

  it('should open description when click to the title', () => {
    const state = { isDescriptionOpened: false };
    const props = {
      title: 'title 1',
      description: 'description 1',
      isRequired: {}
    }
    const component = mountTaskDetail(null, props);

    expect(component.find('.TaskDetail__description').length).toBe(0);
    component.find('.TaskDetail__header--title').simulate('click');
    expect(component.find('.TaskDetail__description').length).toBe(1);
  });
});