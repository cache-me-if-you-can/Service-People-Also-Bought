import React from 'react';
import jest from 'jest';
import { shallow, mount } from '../../setupTests';
import App from '../app';

describe('App', () => {

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          id: 0,
          json: () => {
            return [{
              name: 'Big ol Compn\'y',
              rating: 'Pretty Pretty Pretty Good',
              ratingBlurb: 'Ehh, I guess I\'d buy it',
              price: '3.50',
              priceChange: '3.5',
            }];
          },
        });
      });

      return p;
    });
  });
  it('Renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists('.app')).toBe(true);
  });


});