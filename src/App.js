import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import styles from './App.module.css'

import { Aside } from './Components/Aside/Aside';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';


import coursesData from './api/courses.json';
import FuzzySearch from 'fuzzy-search';
import { debounce } from './service/debounce'

import { FocusedModuleContext } from './Context/FocusedModuleContext';
import { ChosenCourseContext } from './Context/ChosenCourseContext';


function App() {
  const [courses, setCourses] = useState(null)
  const [query, setQuery] = useState('');
  const [isLoading, setLoading] = useState(false);

  const { setFocusedModuleId } = useContext(FocusedModuleContext);
  const { chosenCourse, setChosenCourse } = useContext(ChosenCourseContext);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCourses(coursesData);
      setLoading(false);
    }, 1000)
  }, [])

  const findCourses = (courses, query) => {
    if(!query) {
      return courses;
    }

    const searcher = new FuzzySearch(courses, ['modules.title', 'title', 'owner']);
    const result = searcher.search(query);

    return result;
  }

  const applyQuery = useCallback(
    debounce(setQuery, 500),
    []
  );

  const hideAside = () => {
    setTimeout(() => {
      setChosenCourse(null);
      setFocusedModuleId(null);
    }, 300)
  }

  const visibleCourses = useMemo(() => {
    return findCourses(courses, query)
  }, [courses, query]);

  return (
    <div className={styles.App}>
      <Header
        setQuery={applyQuery}
        loading={isLoading}
      />

      <div className={
        chosenCourse
        ? `${styles.pageContent} ${styles.asideActive}`
        : styles.pageContent}
      >
        <Main courses={visibleCourses} />
        {
          chosenCourse &&
            <Aside close={hideAside} />
        }
      </div>
    </div>
  );
}

export default App;
