import React from 'react';
import { shallow } from 'enzyme';
import Cards from '../components/Cards/Cards.js';

test('Testing Cards component', () => {
 const wrapper = shallow(<Cards />);
 expect(wrapper).toMatchSnapshot();
});