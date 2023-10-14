import React from 'react';

import styles from './styles.module.scss';

const TextContainer = ({ text, btn }) => {
  return (
    <div className={styles.textbox}>
      {text}
      <div className={styles.buttonPlace}>{btn}</div>
    </div>
  );
};

export default TextContainer;
