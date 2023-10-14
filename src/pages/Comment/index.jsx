import React from 'react';

import { ViewBtn, TextContainer } from '../../shared';

import styles from './styles.module.scss';

const Comment = () => {
  const sayHello = () => {
    console.log('Hello');
  };

  return (
    <>
      <TextContainer
        text={
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi maiores facilis, nostrum natus ratione velit aut in quibusdam repellendus?'
        }
        btn={<ViewBtn onPush={sayHello} btnText={'Просмотр'} />}
      />
    </>
  );
};

export default Comment;
