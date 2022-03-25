export const setUserStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserStorage = () => {
  localStorage.removeItem("user");
};
