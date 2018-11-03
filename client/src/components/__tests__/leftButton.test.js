import React from 'react';
import { shallow, mount } from '../../setupTests';
import LeftButton from '../leftButton';

describe('Left Button', () => {
  it('Renders', () => {
    const wrapper = shallow(<LeftButton />);
    expect(wrapper.exists()).toBe(true);
  });
});