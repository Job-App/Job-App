import React from 'react';
import { shallow } from 'enzyme';
import HeaderBar from '../components/HeaderBar/Headerbar.js';

test('Testing HeaderBar component', () => {
 const wrapper = shallow(<HeaderBar />);
 expect(wrapper).toMatchSnapshot();
});