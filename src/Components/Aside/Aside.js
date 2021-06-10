import React, { useEffect, useContext } from 'react';

import styles from './Aside.module.css'

import { Module } from '../Module/Module';
import { TagsList } from '../TagsList/TagsList';

import { ChosenCourseContext } from '../../Context/ChosenCourseContext';


export const Aside = ({ close }) => {
  const { chosenCourse } = useContext(ChosenCourseContext);
  const { courseInfo, modules } = chosenCourse;


  const toggleAsideRoll = () => {
    const aside = document.querySelector('#aside');
    aside.classList.toggle(styles.roll);
  }

  useEffect(() => {
    toggleAsideRoll();
  }, [])

  return (
    <div id='aside' className={styles.aside}>
      <div className={styles.topBar}>
        <h4 className={styles.subtitle}>
          Course
        </h4>

        <button
          className={styles.closeBtn}
          onClick={() => {
            toggleAsideRoll();
            close();
          }}
        >
          &#10006;
        </button>
      </div>

      <TagsList tags={courseInfo.tags} />

      <h3
        className={styles.title}
      >
         {`${courseInfo.owner}`}&#8217;{`s ${courseInfo.title}`}
      </h3>

      {modules.map(module =>
        <Module
          role={'aside'}
          module={module}
          key={module.moduleId}
        />)}
    </div>
  )
}
