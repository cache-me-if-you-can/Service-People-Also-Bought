import React from 'react';
import { shallow, mount } from '../../setupTests';
import StockBox from '../stockBox.jsx';

describe('StockBox', () => {
  const state = {
    stocks: [{
      name: 'Big ol Compn\'y',
      rating: 'Pretty Pretty Pretty Good',
      ratingBlurb: 'Ehh, I guess I\'d buy it',
      price: '3.50',
      priceChange: '3.5',
    },
    {
      name: 'Big ol Compn\'y',
      rating: 'Pretty Pretty Pretty Good',
      ratingBlurb: 'Ehh, I guess I\'d buy it',
      price: '3.50',
      priceChange: '3.5',
    }],
  };

  it('Renders', () => {
    const wrapper = shallow(<StockBox state={state} />);
    expect(wrapper.exists()).toBe(true);
  });


  // it('Renders StockBox', () => {
  //   const wrapper = shallow(<StockBox state={state.stocks} />);
  //   expect(wrapper.exists('.stockBox')).toBe(true);
  // });

  

});