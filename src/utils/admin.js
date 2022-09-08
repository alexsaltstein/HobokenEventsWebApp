export const logout = (setUser) => {
  setUser(null);
  window.localStorage.clear();
};
