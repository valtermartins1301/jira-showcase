import React from 'react';
import { shallow } from 'enzyme';
import { Showcase } from './component';

it('renders welcome message', () => {
  const wrapper = shallow(<Showcase />);
  const welcome = <h1>welcome</h1>;

  const rendered = wrapper.first().shallow();
  expect(rendered.find(welcome)).toBeTruthy();
});
