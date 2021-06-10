import React, { useState } from 'react';

import styles from './Main.module.css'

import { Course } from '../Course/Course';
import { Loader } from '../Loader/Loader';

export const Main = ({ courses }) => {
  const [statuses, setStatuses] = useState([
    'submitted',
    'in progress',
    'ready for release',
  ])

  return (
    <main className={styles.main}>
      {statuses.map(status => {
        return (
          <div
            className={styles.status}
            key={status}
          >
            <h2
              className={styles.statusTitle}
            >
              {status}
            </h2>

            <div className={styles.statusColumn}>
              {courses
                ? (courses.map((course) =>
                    <Course
                      course={course}
                      statusTab={status}
                      key={`${course.id} ${status}`}
                  />)) : (
                    <>
                      {[...Array(4).keys()].map(index =>
                        <Loader key={`${index} ${status}`} animated='true'/>
                      )}
                    </>
                  )
              }
            </div>
          </div>
        )
      })}
    </main>
  )
}