import React from 'react';
import { ChosenCourseProvider } from './ChosenCourseContext';
import { FocusedModuleProvider } from './FocusedModuleContext';

export const AppContextProvider = ({ children }) => {
  return (
    <FocusedModuleProvider>
      <ChosenCourseProvider>
        {children}
      </ChosenCourseProvider>
    </FocusedModuleProvider>
  )
}
