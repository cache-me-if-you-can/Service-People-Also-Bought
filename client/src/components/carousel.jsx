import React from 'react';
import StockBox from './stockBox.jsx';
import styles from '../../Styles/carousel.css';
import LeftButton from './leftButton.jsx';
import RightButton from './rightButton.jsx';

function Carousel(props) {

  return (
    <div className={styles.col1}> 
      <div className={styles.col2}>
      <RightButton moveRight={props.moveRight} />
      <LeftButton moveLeft={props.moveLeft} />
        <div className={styles.wrapper}>
          <div className={styles.carousel}>
            <StockBox stocks={props.stocks} />
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default Carousel;
