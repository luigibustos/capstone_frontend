const getUserToken = () => {
  return localStorage.getItem("token");
};

// const setUserToken = async (token) => {
//   return localStorage.setItem("token", token);
// };

const setUserToken = async (token) => {
  try {
    localStorage.setItem("token", token);
  } catch (error) {
    console.error("Error setting token in local storage", error);
  }
};

const clearUserToken = () => {
  return localStorage.setItem("token", "");
};

export { getUserToken, setUserToken, clearUserToken };
