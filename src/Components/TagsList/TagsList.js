import React from 'react';
import styles from './TagsList.module.css';

export const TagsList = ({ tags }) => {
  return (
    <ul className={styles.tagsList}>
      {tags.map(({ name, type }) =>
      <li
        className={styles[type]}
        key={name}
      >
        {name}
      </li>)}
    </ul>
  )
}