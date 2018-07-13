import React from 'react';
import { shallow } from 'enzyme';
import { App } from './component';

it('renders a message', () => {
  const message = <p>it works</p>;

  const wrapper = shallow(<App>{message}</App>);

  const rendered = wrapper.first().shallow();
  expect(rendered.find(message)).toBeTruthy();
});
