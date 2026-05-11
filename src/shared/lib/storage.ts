export const getStorageItem = (key: string): string | null => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const setStorageItem = (key: string, value: string): void => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    return;
  }
};

export const removeStorageItem = (key: string): void => {
  try {
    window.localStorage.removeItem(key);
  } catch {
    return;
  }
};
