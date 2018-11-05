import React from 'react';
import { shallow, mount } from '../../setupTests';
import Carousel from '../carousel.jsx';

describe('Carousel', () => {
  it('Renders', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Renders Carousel', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.exists('.carousel')).toBe(true);
  });

  

});
