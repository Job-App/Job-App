import "react-native"
import React from 'react';
import {shallow} from 'enzyme';
import Login from '../navigation/Login/Login.js';

test('Testing Login component', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});
