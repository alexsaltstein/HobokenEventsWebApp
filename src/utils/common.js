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

export const DAYS_ENUM = {
  Sunday: "Sunday",
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
};

export const getDayOfWeek = (dateNum) => {
  if (dateNum < 0 || dateNum > 6) {
    console.error("Error getting real day of week bad value", dateNum);
    return null;
  }
  return Object.values(DAYS_ENUM)[dateNum];
};

export const handleError = (setError, errorMessage) => {
  setError(errorMessage);
  setTimeout(() => {
    setError(null);
  }, 3000);
};
