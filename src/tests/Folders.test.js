import React from 'react';
import {shallow} from 'enzyme';
import Folders from '../components/Folders/Folders.js';

jest.mock('react-native-sqlite-storage', () => {
  return openDatabase('table_applications.db');
});

test('Testing Folders component', () => {
  const mockProps = {
    name: 'Active',
  };

  const wrapper = shallow(<Folders {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});
