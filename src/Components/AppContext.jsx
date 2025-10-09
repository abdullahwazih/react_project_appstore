import { createContext, useState, useEffect } from 'react';

export const AppsContext = createContext();

export const AppsProvider = ({ children }) => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch('/apps.json')
      .then(res => res.json())
      .then(data => setApps(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <AppsContext.Provider value={{ apps }}>
      {children}
    </AppsContext.Provider>
  );
};
