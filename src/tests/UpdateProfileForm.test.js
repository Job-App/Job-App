import React from 'react';
import {shallow} from 'enzyme';
import UpdateProfileForm from '../components/UpdateProfileForm/UpdateProfileForm.js';

test('Testing UpdateProfileForm component', () => {
  const wrapper = shallow(<UpdateProfileForm />);
  expect(wrapper).toMatchSnapshot();
});
