import React from 'react';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock:React.FC = () => {
  return (
    <div>
      <h1 className={styles.root}>
        <span>ЗА ЦИМ ПОСИЛАННЯМ НІЧОГО НЕ ЗНАЙДЕНО</span><br />😕
      </h1>
    </div>
  );
};
