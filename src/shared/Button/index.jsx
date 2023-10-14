import React from 'react';

import styles from "./styles.module.scss";

const Button = ({ btnText, onPush }) => {
  return (
    <button onClick={onPush} className={styles.view}>{btnText}</button>
  );
};

export default Button;
