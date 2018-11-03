import React from 'react';
import styles from '../../Styles/leftButton.css';

function LeftButton(props) {
  return (
    <div className={styles.leftButton}>
      <i className="fa fa-angle-left fa-3x"  onClick={props.moveLeft} ></i>
    </div> 
  ); 
}

export default LeftButton;
