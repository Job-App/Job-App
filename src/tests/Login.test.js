import "react-native"
import React from 'react';
import {shallow} from 'enzyme';
import Login from '../navigation/Login/Login.js';

test('Testing Login component', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

test('Testing onPress function', () => {
  const onPressEvent = jest.fn();
  onPressEvent.mockReturnValue('Update request');
  const wrapper = shallow(<Login onPress={ onPressEvent } />);
  wrapper.find("Name").first().props().onPress();
  expect(onPressEvent.mock.calls.length).toBe(1);
})
