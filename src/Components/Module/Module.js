import React, { useContext, useState } from 'react';
import { FocusedModuleContext } from '../../Context/FocusedModuleContext';
import styles from './Module.module.css'

export const Module = ({ module, role }) => {
  const { title, description, status } = module;

  const { focusedModuleId, setFocusedModuleId } = useContext(FocusedModuleContext)

  const [expanded, setExpanded] = useState(false);


  const focusModuleToggleHandler = () => {
    focusedModuleId === module.moduleId
      ? setFocusedModuleId(null)
      : setFocusedModuleId(module.moduleId)
  }

  return (
    <div
      className={
        focusedModuleId === module.moduleId
          ? `${styles.module} ${styles.focused}`
          : styles.module
      }
      onClick={focusModuleToggleHandler}
    >
      <div className={styles.wrapper}>
        <h4 className={styles.title}>
          {title}
        </h4>
        {role==='aside' && (
          <span className={styles.status}>{status}</span>
        )}
        <button
          className={
            expanded
              ? `${styles.expandBtn} ${styles.hideBtn}`
              : styles.expandBtn
          }
          onClick={() => setExpanded(!expanded)}
        >
          &#709;
        </button>
      </div>

      <p className={
        expanded
          ? `${styles.description} ${styles.expanded}`
          : styles.description
      }>
        {description}
      </p>
    </div>
  )
}
