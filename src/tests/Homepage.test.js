import "react-native"
import React from 'react';
import 'react-native-gesture-handler'
import {shallow} from 'enzyme';
import Homepage from '../navigation/Homepage/Homepage.js';

test('Testing Homepage component', () => {
  const wrapper = shallow(<Homepage />);
  expect(wrapper).toMatchSnapshot();
});
