import React from 'react';
import { shallow } from 'enzyme';
import JobDetails from '../navigation/JobDetails/JobDetails.js';

test('Testing AddJob page', () => {
 const wrapper = shallow(<JobDetails />);
 expect(wrapper).toMatchSnapshot();
});
