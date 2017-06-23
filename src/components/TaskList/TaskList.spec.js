import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import TaskList from './';

const mountWithStore = state => element => {
  const store = createStore(x => x, state || {});
  return mount(<Provider store={store}>{element}</Provider>);
};

const mountTaskList = (state, props) => {
  const wrapper = mountWithStore(state)(<TaskList {...props} />);
  return wrapper.find('TaskList');
};

describe('components/TaskList', () => {
  it('should render default', () => {
    const state = {tasks:[{id:1,title:'title 1',description:'description 1'}]};    
    const component = mountTaskList(state, null);

    expect(component.find('TaskDetail').length).toBe(1);
  });
});