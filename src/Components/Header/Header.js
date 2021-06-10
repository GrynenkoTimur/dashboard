import React, { useState } from 'react';
import styles from './Header.module.css'

export const Header = ({ setQuery, loading }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <header className={styles.header}>
       <h1 className={styles.title}>
        dashboard
      </h1>

      <div>
        <input
          type="text"
          placeholder='enter course or module name'
          className={styles.search}
          value={inputValue}
          onChange={({ target }) => {
            setInputValue(target.value);
            setQuery(target.value);
          }}
          disabled={loading}
        />
        <button
          className={styles.clearBtn}
          value={null}
          onClick={({ target }) => {
            setInputValue(target.value);
            setQuery(target.value);
          }}
        >
          &#10006;
        </button>
      </div>
    </header>
  )
}