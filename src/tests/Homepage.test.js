import React from 'react';
import { shallow } from 'enzyme';
import Homepage from '../navigation/Homepage/Homepage.js';

test('Testing Homepage', () => {
 const wrapper = shallow(<Homepage />);
 expect(wrapper).toMatchSnapshot();
});