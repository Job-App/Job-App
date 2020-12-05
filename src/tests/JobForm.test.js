import React from 'react';
import { shallow } from 'enzyme';
import JobForm from '../components/JobForm/JobForm.js';

test('Testing JobForm component', () => {
 const wrapper = shallow(<JobForm />);
 expect(wrapper).toMatchSnapshot();
});