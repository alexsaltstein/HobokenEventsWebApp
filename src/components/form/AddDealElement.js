import React from "react";
import { GenericInput } from "./GenericInput";
import Checkbox from "./Checkbox";
import { IDIcon } from "../icons";
import "./formStyle.css";
import { DAYS_ENUM } from "../../utils/common";

export const AddDealElement = ({
  deal,
  removeDeal,
  setDeals,
  deals,
  index,
}) => {
  const [dayOfWeek, setDayOfWeek] = React.useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });

  const setDealOption = (option, val) => {
    const tempDayOfWeek = dayOfWeek;
    if (option === "dayOfWeek") {
      tempDayOfWeek[val] = !tempDayOfWeek[val];
      const formattedDayOfWeek = [];
      for (const key in tempDayOfWeek) {
        if (tempDayOfWeek[key] === true) {
          formattedDayOfWeek.push(key);
        }
      }
      deal.dayOfWeek = formattedDayOfWeek;
      setDayOfWeek({ ...tempDayOfWeek });
    }
    if (option === "title") {
      deal.title = val;
    }
    if (option === "startTime") {
      deal.startTime = val;
    }
    if (option === "endTime") {
      deal.endTime = val;
    }
    if (option === "deals") {
      deal.deals = val;
    }
    const rebuiltDeals = [];
    deals.forEach((deal, i) => {
      rebuiltDeals.push(deal);
    });
    rebuiltDeals[index] = deal;
    setDeals(rebuiltDeals);
  };

  return (
    <div className="w-[95%] m-auto mt-4 border">
      <div className="w-[90%] m-auto mt-2 mb-2 lg:w-[99%]">
        <label className="relative mb-2 text-sm font-medium text-input-label-gray">
          Deal Details
          <span className="text-red-400">&nbsp;*</span>
        </label>
        <button
          className="relative w-[1%] float-right mr-[20px]"
          onClick={() => removeDeal()}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="red"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex w-full">
          <GenericInput
            name="Title"
            type="text"
            label="Title"
            extraProps="w-full"
            placeholder="Taco Tuesday"
            icon={<IDIcon />}
            onChange={(event) => setDealOption("title", event.target.value)}
          />
        </div>
        <div className="flex">
          <label
            htmlFor="Date and Time"
            className="block text-sm font-medium text-input-label-gray"
          >
            Days and Time
            <span className="text-red-400">&nbsp;*</span>
          </label>
        </div>
        <label
          htmlFor="Date and Time"
          className="block text-xs font-medium text-input-label-gray italic"
        >
          select at least one day of the week
        </label>
        <div className="w-full mt-2 mb-2">
          <div className="m-auto flex justify-center">
            {Object.keys(DAYS_ENUM).map((day) => (
              <Checkbox
                key={`${day}-${index}`}
                id={`${day}-${index}`}
                text={
                  day.toLowerCase() === DAYS_ENUM.Thursday
                    ? day.substring(0, 2)
                    : day.charAt(0)
                }
                onClick={() => setDealOption("dayOfWeek", DAYS_ENUM[day])}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full">
          <GenericInput
            name="startTime"
            type="text"
            label="Start Time"
            placeholder="5PM"
            onChange={(event) => setDealOption("startTime", event.target.value)}
            extraProps="w-[47.5%]"
          />
          <div className="w-[5%]" />
          <GenericInput
            name="endTime"
            type="text"
            label="End Time"
            subtext={"(optional)"}
            onChange={(event) => setDealOption("endTime", event.target.value)}
            extraProps="w-[47.5%]"
          />
        </div>
        <div className="flex">
          <label
            htmlFor="Deal Description"
            className="block mb-2 text-sm font-medium text-input-label-gray"
          >
            Description
            <span className="text-red-400">&nbsp;*</span>
          </label>
        </div>
        <textarea
          id="description"
          rows="4"
          className="block p-2.5 w-full text-sm text-input-label-gray rounded border focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter each deal separated by a comma...&#10;e.g. 3 tacos for $4, $5 tequila shots, $6 margaritas"
          onChange={(event) =>
            setDealOption(
              "deals",
              event.target.value.split(",").map((val) => val.trim())
            )
          }
        />
      </div>
    </div>
  );
};
