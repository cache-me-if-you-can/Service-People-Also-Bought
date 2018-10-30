import React from 'react';

function StockBox(props) {
  const stocks = props.stocks;
  const stockList = stocks.map((stock) => 
    <div>
      <div className='name'>{stock.name}</div>
      <div className='rating'>{stock.rating}</div>
      <div className='ratingBlurb'>{stock.ratingBlurb}</div>
      <div className='price'>{stock.price}</div>
      <div className='priceChange'>{stock.priceChange}</div>
    </div>
  )
  return (
    <div>
      {stockList}
    </div>
  )
}

export default StockBox;

