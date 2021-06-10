import React, { useState } from 'react';

export const ChosenCourseContext = React.createContext({
  chosenCourse: null,
  setChosenCourse: () => {},
})

export const ChosenCourseProvider = ({ children }) => {
  const [chosenCourse, setChosenCourse] = useState(null);

  const contextValue = {
    chosenCourse,
    setChosenCourse,
  }

  return (
    <ChosenCourseContext.Provider value={contextValue}>
      {children}
    </ChosenCourseContext.Provider>
  )
}
