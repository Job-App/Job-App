import React from 'react';
import { shallow } from 'enzyme';
import AddJob from '../navigation/AddJob/AddJob.js';

test('Testing AddJob page', () => {
 const wrapper = shallow(<AddJob />);
 expect(wrapper).toMatchSnapshot();
});
