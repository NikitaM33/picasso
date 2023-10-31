import React from 'react';

import style from './style.module.scss';

const Skeleton = () => {
  return (
    <div className={style.skeleton}>
      <div className={style.skeletonTitle}></div>
      <div className={style.skeletonText1}></div>
      <div className={style.skeletonText2}></div>
      <div className={style.skeletonButtonContainer}>
        <div className={style.skeletonButton}></div>
      </div>
    </div>
  );
};

export default Skeleton;
