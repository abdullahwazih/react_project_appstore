export const addAppIdToLocalStorage = (id) => {
  const storedIds = JSON.parse(localStorage.getItem('appIds')) || [];

  if (storedIds.includes(id)) {
    return false; 
  }

  storedIds.push(id);
  localStorage.setItem('appIds', JSON.stringify(storedIds));
  return true; 
};

export const getAppId = () => {
  return JSON.parse(localStorage.getItem('appIds')) || [];
};


export const removeAppId = (id) => {
  const storedIds = JSON.parse(localStorage.getItem('appIds')) || [];
  const updatedIds = storedIds.filter(appId => appId !== id);
  localStorage.setItem('appIds', JSON.stringify(updatedIds));
};