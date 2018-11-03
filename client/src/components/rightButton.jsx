import React from 'react';
import styles from '../../Styles/rightButton.css';

function RightButton(props) {
  return (
    <div className={styles.rightButton}>
      <i className="fa fa-angle-right fa-3x"  onClick={props.moveRight}> </i>
    </div>
  );
}

export default RightButton;
