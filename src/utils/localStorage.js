const setToLocalStorage = (user) => {
  localStorage.setItem("Health-First-User", JSON.stringify(user));
};
const removeFromLocalStorage = () => {
  localStorage.removeItem("Health-First-User");
};

const getFromLocalStorage = () => {
  let charityUser = localStorage.getItem("Health-First-User");
  const user = charityUser ? JSON.parse(charityUser) : null;
  return user;
};

export { setToLocalStorage, removeFromLocalStorage, getFromLocalStorage };
