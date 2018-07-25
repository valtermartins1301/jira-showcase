import React from 'react';
import { shallow } from 'enzyme';
import { CardDescription } from './component';

it('renders welcome message', () => {
  const wrapper = shallow(<CardDescription />);
  const welcome = <h1>welcome</h1>;

  const rendered = wrapper.first().shallow();
  expect(rendered.find(welcome)).toBeTruthy();
});
