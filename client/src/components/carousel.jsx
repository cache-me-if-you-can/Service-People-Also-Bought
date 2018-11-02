import React from 'react';
import StockBox from './stockBox.jsx';
import styles from '../../Styles/carousel.css'

function Carousel(props) {
  return (
    <div className={styles.col1}>
      <div className={styles.wrapper}>
        <div className={styles.carousel}>
          <StockBox stocks={props.stocks} />
        </div>
      </div>
    </div>
  ); 
}

export default Carousel;
