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
  Sunday: "sunday",
  Monday: "monday",
  Tuesday: "tuesday",
  Wednesday: "wednesday",
  Thursday: "thursday",
  Friday: "friday",
  Saturday: "saturday",
};

export const getDayOfWeek = (dateNum) => {
  if (dateNum < 0 || dateNum > 6) {
    console.error("Error getting real day of week bad value", dateNum);
    return null;
  }
  return Object.values(DAYS_ENUM)[dateNum];
};

export const getDayColors = (dateVal) => {
  const dayOfWeek =
    typeof dateVal === "number" ? getDayOfWeek(dateVal) : dateVal;
  switch (dayOfWeek) {
    case DAYS_ENUM.Sunday:
      return "text-red-700";
    case DAYS_ENUM.Monday:
      return "text-green-700";
    case DAYS_ENUM.Tuesday:
      return "text-blue-700";
    case DAYS_ENUM.Wednesday:
      return "text-orange-700";
    case DAYS_ENUM.Thursday:
      return "text-purple-700";
    case DAYS_ENUM.Friday:
      return "text-pink-700";
    case DAYS_ENUM.Saturday:
      return "text-yellow-700";
    default:
      console.error("Error getting color for dateVal", dateVal);
      return null;
  }
};

export const capitalizeFirstLetter = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
};

const ABREVIATED_ENUM = {
  'Monday': 'Mon.',
  'Tuesday': 'Tues.', 
  'Wednesday': 'Wed.',
  'Thursday': 'Thurs.',
  'Friday': 'Fri.',
  'Saturday': 'Sat',
  'Sunday': 'Sun'
}
export const abreviateDay = (day) => {
  return ABREVIATED_ENUM[day];
}
export const handleError = (setError, errorMessage) => {
  setError(errorMessage);
  setTimeout(() => {
    setError(null);
  }, 3000);
};
