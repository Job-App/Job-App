import "react-native"
import React from 'react';
import 'react-native-gesture-handler'
import {shallow} from 'enzyme';
import JobDetails from '../navigation/JobDetails/JobDetails.js';

test('Testing Homepage component', () => {
  const wrapper = shallow(<JobDetails />);
  expect(wrapper).toMatchSnapshot();
});
