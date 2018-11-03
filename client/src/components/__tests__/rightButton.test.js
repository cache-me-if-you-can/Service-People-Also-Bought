import React from 'react';
import { shallow, mount } from '../../setupTests';
import RightButton from '../rightButton';

describe('Right Button', () => {
  it('Renders', () => {
    const wrapper = shallow(<RightButton />);
    expect(wrapper.exists()).toBe(true);
  });
});