import React, { useState } from 'react';

export const FocusedModuleContext = React.createContext({
  focusedModuleId: null,
  setFocusedModuleId: () => {},
})

export const FocusedModuleProvider = ({ children }) => {
  const [focusedModuleId, setFocusedModuleId] = useState(null);

  const contextValue = {
    focusedModuleId,
    setFocusedModuleId,
  }

  return (
    <FocusedModuleContext.Provider value={contextValue}>
      {children}
    </FocusedModuleContext.Provider>
  )
}