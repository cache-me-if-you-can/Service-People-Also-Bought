import React from 'react';
import jest from 'jest';
import { shallow, mount } from '../../setupTests';
import App from '../../index';

describe('App', () => {
  
  it('Renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists('.app')).toBe(true);
  });

  

});