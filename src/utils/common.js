export const formatDate = (currDate) => {
  const today = new Date();
  const isToday =
    today.getDate() === currDate.getDate() &&
    today.getMonth() === currDate.getMonth() &&
    today.getFullYear() === currDate.getFullYear();

  return isToday
    ? "Today"
    : `${
        currDate.getMonth() + 1
      }/${currDate.getDate()}/${currDate.getFullYear()}`;
};
