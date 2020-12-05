import React from 'react';
import {shallow} from 'enzyme';
import Folders from '../components/Folders/Folders.js';
import Cards from '../components/Cards/Cards.js';

const mockProps = {
  navigation: {navigate: jest.fn()},
  name: "Active"
};

test('Testing Folders component', () => {
  const wrapper = shallow(<Cards {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});

const mockItem = {
  key: 3,
  id: 3,
  company: "Company",
  title: "Title",
  closing: "10/31/2020"
};

test('Testing listItemView function', () => {
  const listItem = jest.fn();
  listItem.mockReturnValue('listItemView invoked');
  const wrapper = shallow(<Cards {...mockItem} />);
  expect(listItem.mock.calls.length(wrapper)).toBe(1);
})
