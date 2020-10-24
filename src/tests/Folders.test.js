import React from 'react';
import { shallow } from 'enzyme';
import Folders from '../components/Folders/Folders.js';

test('Testing Folders component', () => {
 const wrapper = shallow(<Folders />);
 expect(wrapper).toMatchSnapshot();
});