export const logout = (setAuth) => {
  setAuth(null);
  window.localStorage.clear();
};
