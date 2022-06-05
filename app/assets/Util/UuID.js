export const UUID_KEY = "uu_id";

export const getUiID = () => {
  const userID = localStorage.getItem(UUID_KEY);

  if (!userID) {
    const newUserID = createUiID();

    localStorage.setItem(UUID_KEY, newUserID);

    return newUserID;
  }

  return userID;
};

export const createUiID = () => {
  return Math.random().toString(36).substr(2, 12);
};
