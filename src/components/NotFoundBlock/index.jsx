import React from 'react';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.root}>
        <span>😕</span> НІЧОГО НЕ ЗНАЙДЕНО
      </h1>
    </div>
  );
};
