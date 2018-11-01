import React from "react";
import styles from '../../Styles/stockBox.css'

function StockBox(props) {
  const stocks = props.stocks;
  const stockList = stocks.map((stock) => 
    <div className={styles.stockBox}>
      <div className={styles.wrapper}>
        <p className={styles.name}>{stock.name}</p>
        <i className="fa fa-tag fa-rotate-90 fa-xs" ></i>
        <span className={styles.rating}>{stock.rating}%</span>
        <div className="ratingBlurb">{stock.ratingBlurb}</div>
      </div>
      <div className="price">{stock.price}</div>
      <div className="priceChange">{stock.priceChange}</div>
    </div>
  )
  return (
    <div>
      {stockList}
    </div>
  )
}

export default StockBox;
