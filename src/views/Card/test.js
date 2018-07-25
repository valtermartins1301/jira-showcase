import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './component';

it('renders welcome message', () => {
  const wrapper = shallow(<Card />);
  const welcome = <h1>welcome</h1>;

  const rendered = wrapper.first().shallow();
  expect(rendered.find(welcome)).toBeTruthy();
});
