import React from 'react';
import StockBox from './stockBox.jsx';
import styles from '../../Styles/carousel.css'

function Carousel(props) {
  return (
    <div className={styles.carousel}>
      <StockBox stocks={props.stocks} />
    </div>
  ); 
}

export default Carousel;
