import React from 'react';
import {shallow} from 'enzyme';
import UpdateJobForm from '../components/UpdateJobForm/UpdateJobForm.js';

const mockProps = {
  navigation: {navigate: jest.fn()},
  id: 3,
  company: "Company",
  title: "Title",
  deadline: "10/31/2020",
  applied: "9/31/2020",
  link: ""
};

const mockUpdateProps = {
  id: 3,
  company: "NewCompany",
  title: "NewTitle",
  deadline: "3/31/2020",
  applied: "2/31/2020",
  link: ""
};

test('Testing UpdateJobForm component', () => {
  const wrapper = shallow(<UpdateJobForm {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});

test('Testing onPress function', () => {
  const onPressEvent = jest.fn();
  onPressEvent.mockReturnValue('Submit update invoked');
  const wrapper = shallow(<UpdateJobForm onPress={ onPressEvent } {...mockUpdateProps} />);
  wrapper.find(mockUpdateProps).first().props().onPress();
  expect(onPressEvent.mock.calls.length).toBe(1);
})
