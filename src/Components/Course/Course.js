import React, { useContext } from 'react';

import styles from './Course.module.css';

import { Module } from '../Module/Module';
import { TagsList } from '../TagsList/TagsList';

import { ChosenCourseContext } from '../../Context/ChosenCourseContext';


export const Course = ({ course, statusTab }) => {
  const { owner, title, modules, tags } = course;
  const { setChosenCourse } = useContext(ChosenCourseContext);

  return (
    <div
      className={styles.Course}
      onClick={() => {
        setChosenCourse({
          courseInfo: course,
          modules: modules.filter(module => module.status === statusTab),
        })
      }}
    >
      <TagsList tags={tags} />

      <h3 className={styles.title}>
        {`${owner}`}&#8217;{`s ${title}`}
      </h3>

      {
        modules
          .filter(module => module.status === statusTab)
          .map(module =>
            <Module
              role={'main'}
              module={module}
              key={module.moduleId}
            />
          )
      }
    </div>
  )
}