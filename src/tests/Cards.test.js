import React from 'react';
import {shallow} from 'enzyme';
import Cards from '../components/Cards/Cards.js';

jest.mock('@react-navigation/native', () => ({
  withNavigation: (component) => component,
}));

test('Testing Cards component', () => {

  const mockProps = {
    navigation: {navigate: jest.fn()},
    key: 3,
    id: 3,
    company: "Company",
    title: "Title",
    closing: "10/31/2020"
  };

  const wrapper = shallow(<Cards {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});
