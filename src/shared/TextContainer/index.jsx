import React from 'react';

import style from './styles.module.scss';

const TextContainer = ({ title, text, btn }) => {
  return (
    <div className={style.textbox}>
      <h3>{title}</h3>
      <div className={style.text}>
        <p>
          {text}
        </p>
      </div>
      <div className={style.buttonPlace}>{btn}</div>
    </div>
  );
};

export default TextContainer;
