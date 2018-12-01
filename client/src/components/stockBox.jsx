import React from 'react';
import styles from '../../Styles/stockBox.css';


function StockBox(props) {
  const stocks = props.stocks;
  const stockList = stocks.map(stock => (
    <div className={styles.stockBox} key={stock.id}>
      <div className={styles.wrapper}>
        <p className={styles.name}>{stock.companyname}</p>
        <div className={styles.ratingHover}>
          <i className="fa fa-tag fa-rotate-90 fa-lg"  />
          <span className={styles.rating}>{stock.rating}%</span>
          <p className={styles.ratingBlurb}>{stock.ratingblurb}.</p>  
        </div>
      </div>
      <div className={styles.priceWrapper}>
        <div className={styles.price}>${stock.price}</div>
        <div className={styles.priceChange}>{stock.pricechange}%</div>
      </div>
    </div>
  ));
  return (
    <div>
      {stockList}
    </div>
  );
}

export default StockBox;
