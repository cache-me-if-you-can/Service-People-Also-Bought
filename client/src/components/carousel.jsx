import React from 'react';
import StockBox from './stockBox.jsx';

function Carousel(props) {
  return (
    <div className="carousel">
      <StockBox stocks={props.stocks} />
    </div>
  ); 
}

export default Carousel;
