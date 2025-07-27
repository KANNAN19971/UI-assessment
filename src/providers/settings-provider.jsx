import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    layout: 'demo1',
    layouts: {
      demo1: {
        sidebarCollapse: false,
        sidebarTheme: 'light',
      },
    },
  });

  const setOption = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const value = {
    settings,
    setSettings,
    setOption,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
} 