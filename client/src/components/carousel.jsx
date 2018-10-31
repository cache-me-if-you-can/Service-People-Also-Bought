import React from 'react';
import StockBox from './stockBox.jsx';

function Carousel(props) {
  return (
    <div>
      <StockBox stocks={props.stocks} />
    </div>
  ); 
}

export default Carousel;
