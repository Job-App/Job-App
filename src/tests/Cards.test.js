import React from 'react';
import { shallow } from 'enzyme';
import Cards from '../components/Cards/Cards.js';
import MockedNavigator from './MockedNavigator.js';
import {render} from 'react-dom';

it('should render correctly', () => {
  const {toJSON} = render(
    <MockedNavigator component={Cards} />
  );
  expect(toJSON()).toMatchSnapshot();
});

/*
test('Testing Cards component', () => {
 const wrapper = shallow(<Cards />);
 expect(wrapper).toMatchSnapshot();
});*/
