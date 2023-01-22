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

const convertMilitaryToReg = (val) => {
  const time = val.split(":");
  const hours = Number(time[0]);
  const minutes = Number(time[1]);

  // calculate
  let timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue = "" + hours;
  } else if (hours > 12) {
    timeValue = "" + (hours - 12);
  } else if (hours === 0) {
    timeValue = "12";
  }

  timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // get minutes
  timeValue += hours >= 12 ? " P.M." : " A.M.";
  return timeValue;
};

export const getDisplayTime = (startTime, endTime) => {
  if (startTime === "-1" && endTime === "25") {
    return "All day";
  }
  if (startTime === "-1") {
    return `Open - ${convertMilitaryToReg(endTime)}`;
  }
  if (endTime === "25") {
    return `${convertMilitaryToReg(startTime)} - Close`;
  }
  return `${convertMilitaryToReg(startTime)} - ${convertMilitaryToReg(
    endTime
  )}`;
};

export const isValidDate = (date) => {
  const dateObj = new Date(date);
  return dateObj instanceof Date && !isNaN(dateObj);
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

export const getDayColors = (dateVal, background) => {
  const dayOfWeek =
    typeof dateVal === "number" ? getDayOfWeek(dateVal) : dateVal;
  switch (dayOfWeek) {
    case DAYS_ENUM.Sunday:
      return background ? "bg-red-300" : "text-red-700";
    case DAYS_ENUM.Monday:
      return background ? "bg-green-300" : "text-green-700";
    case DAYS_ENUM.Tuesday:
      return background ? "bg-blue-300" : "text-blue-700";
    case DAYS_ENUM.Wednesday:
      return background ? "bg-orange-300" : "text-orange-700";
    case DAYS_ENUM.Thursday:
      return background ? "bg-purple-300" : "text-purple-700";
    case DAYS_ENUM.Friday:
      return background ? "bg-pink-300" : "text-pink-700";
    case DAYS_ENUM.Saturday:
      return background ? "bg-yellow-300" : "text-yellow-700";
    default:
      console.error("Error getting color for dateVal", dateVal);
      return null;
  }
};

export const capitalizeFirstLetter = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
};

const ABREVIATED_ENUM = {
  Monday: "Mon.",
  Tuesday: "Tues.",
  Wednesday: "Wed.",
  Thursday: "Thurs.",
  Friday: "Fri.",
  Saturday: "Sat",
  Sunday: "Sun",
};
export const abreviateDay = (day) => {
  return ABREVIATED_ENUM[day];
};
export const handleError = (setError, errorMessage) => {
  setError(errorMessage);
  setTimeout(() => {
    setError(null);
  }, 3000);
};
