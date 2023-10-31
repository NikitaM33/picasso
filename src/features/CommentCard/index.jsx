import React from 'react';
import { useInView } from 'react-intersection-observer';

import style from './style.module.scss';
import { ViewBtn, TextContainer, Skeleton } from '../../shared';

const CommentCard = ({ title, body, btnListener }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={style.commentArea}>
      {inView ? (
        <TextContainer
          title={title}
          text={body}
          btn={<ViewBtn onPush={btnListener} btnText={'Просмотр'} />}
        />
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default CommentCard;
