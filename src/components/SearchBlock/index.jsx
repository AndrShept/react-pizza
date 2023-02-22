import React from 'react';

import styles from './SearchBlock.module.scss';
import { TfiSearch, TfiClose } from 'react-icons/tfi';
import { AppContext } from '../../App';
export const SearchBlock = () => {
  const { searchValue, setSearchValue } = React.useContext(AppContext);
  const inputRef = React.useRef();
  const onClickSearch = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <TfiSearch className={styles.serchIcon} />
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder='Пошук...'
        type='text'
      />
      {searchValue && (
        <TfiClose
          onClick={() => onClickSearch()}
          className={styles.closeIcon}
        />
      )}
    </div>
  );
};
