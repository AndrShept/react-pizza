import React from 'react';

import styles from './InputBlock.module.scss';
import { TfiSearch, TfiClose } from 'react-icons/tfi';
import { AppContext } from '../../App';
export const InputBlock = () => {
  const { searchValue, setSearchValue } = React.useContext(AppContext);
  // console.log('@@@@', searchValue);
  return (
    <div className={styles.root}>
      <TfiSearch className={styles.serchIcon} />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder='Пошук...'
        type='text'
      />
      {searchValue && (
        <TfiClose
        
          onClick={() => setSearchValue('')}
          className={styles.closeIcon}
        />
      )}
    </div>
  );
};
