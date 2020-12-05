import React from 'react';
import {shallow} from 'enzyme';
import UpdateJobForm from '../components/DeleteJob/DeleteJob.js';
import DeleteJob from '../components/DeleteJob/DeleteJob.js';

const mockProps = {
  navigation: {navigate: jest.fn()},
  id: 3,
  company: "Company",
  title: "Title",
  deadline: "10/31/2020",
  applied: "9/31/2020",
  link: ""
};

test('Testing Delete Snapshot', () => {
  const wrapper = shallow(<DeleteJob />);
  expect(wrapper).toMatchSnapshot();
});

test('Testing onPress function', () => {
  const onPressEvent = jest.fn();
  onPressEvent.mockReturnValue('Submit delete invoked');
  const wrapper = shallow(<DeleteJob onPress={ onPressEvent } id={mockProps.id} />);
  wrapper.find(mockProps).first().props().onPress();
  expect(onPressEvent.mock.calls.length).toBe(1);
})
