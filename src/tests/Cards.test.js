import React from 'react';
import {shallow} from 'enzyme';
import Cards from '../components/Cards/Cards.js';

const mockProps = {
  navigation: {navigate: jest.fn()},
  key: 3,
  id: 3,
  company: "Company",
  title: "Title",
  closing: "10/31/2020"
};

test('Testing Cards component', () => {
  const wrapper = shallow(<Cards {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});

test('Testing onPress function', () => {
  const onPressEvent = jest.fn();
  onPressEvent.mockReturnValue('Link on press invoked');
  const wrapper = shallow(<Cards onPress={ onPressEvent } {...mockProps} />);
  wrapper.find(mockProps).first().props().onPress();
  expect(onPressEvent.mock.calls.length).toBe(1);
})
