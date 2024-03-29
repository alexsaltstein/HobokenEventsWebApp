import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { GenericInput } from "./GenericInput";
import Checkbox from "./Checkbox";
import DaySelect from "./DaySelect";
import { IdIcon } from "../icons/Icons";
import "./formStyle.css";
import { DAYS_ENUM } from "../../utils/common";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ErrorText } from "../form/ErrorText";
import { groupedTags } from "../../constants/formTags";

const animatedComponents = makeAnimated();

export const AddDealElement = ({
  deal,
  error,
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

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState(25);
  const [allDay, setAllDay] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  React.useEffect(() => {
    setDealOption("startTime", startTime);
  }, [startTime]);

  React.useEffect(() => {
    setDealOption("endTime", endTime);
  }, [endTime]);

  const allDayAction = () => {
    setAllDay(!allDay);
    setStartTime("");
  };

  const tagsAction = (tags) => {
    setSelectedTags(tags)
    setDealOption('tags', tags.map(tag => tag.value));
  };

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
    if (option === "tags") {
      deal.tags = val;
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
    <div className="m-auto mt-4 border">
      <div className="m-auto mt-2 mb-4">
        <div className="mb-2 mx-4">
          <label className="relative mb-2 text-base font-semibold text-input-label-gray">
            Deal Details
            <span className="text-red-400">&nbsp;*</span>
          </label>
          <button
            className="relative w-6 float-right"
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
        </div>
        <div className="flex w-auto mx-4">
          <GenericInput
            name="Title"
            type="text"
            label="Title"
            extraProps="w-full"
            required
            placeholder="Taco Tuesday"
            icon={<IdIcon />}
            onChange={(event) => setDealOption("title", event.target.value)}
          />
        </div>
        <ErrorText extraProps={"ml-4"}>{error.dealTitle}</ErrorText>
        <div className="flex mx-4">
          <label
            htmlFor="Date"
            className="block text-sm font-medium text-input-label-gray mt-2"
          >
            Days
            <span className="text-red-400">&nbsp;*</span>
          </label>
        </div>
        <label
          htmlFor="Date"
          className="block text-xs font-medium text-input-label-gray italic mb-4 mx-4"
        >
          Select at least one day of the week
        </label>
        <div className="w-full my-2">
          <div className="mb-4 flex justify-center">
            {Object.keys(DAYS_ENUM).map((day) => (
              <DaySelect
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
        <ErrorText extraProps={"ml-4 mb-4"}>{error.dealDay}</ErrorText>
        <div className="flex mx-4 flex-col">
          <label
            htmlFor="Time"
            className="block text-sm font-medium text-input-label-gray mt-2"
          >
            Time
            <span className="text-red-400">&nbsp;*</span>
          </label>
          <label
            htmlFor="Time"
            className="block text-xs font-medium text-input-label-gray italic mb-4"
          >
            Leave blank for deals that Start/End at Open/Close
          </label>
        </div>
        <div className="grid grid-cols-5 gap-x-4 mx-4">
          <div className="col-span-2">
            <div className="relative">
              <label className="absolute left-1 -top-1 z-10 m-1 mt-1 text-input-label-gray text-sm">
                Start Time
              </label>
            </div>
            <div className="relative border rounded mb-2">
              <input
                className="pt-4 p-2 w-full"
                type="time"
                disabled={allDay}
                value={startTime}
                onChange={(event) => {
                  setStartTime(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className={`relative`}>
              <label className="absolute left-1 -top-1 z-10 m-1 mt-1 text-input-label-gray text-sm">
                End Time
              </label>
            </div>
            <div className="relative border rounded mb-2">
              <input
                className="pt-4 p-2 w-full"
                type="time"
                disabled={allDay}
                value={endTime}
                onChange={(event) => {
                  setEndTime(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="relative -top-2 md:top-1 text-input-label-gray">
            <Checkbox
              id="allDay"
              text={"All day?"}
              onClick={() => allDayAction()}
            />
          </div>
        </div>
        <div className="mx-4">
          <div className="flex mt-2">
            <label
              htmlFor="Deal Description"
              className="block mb-2 text-sm font-medium text-input-label-gray"
            >
              Tags <span className="italic text-xs">(optional, up to 4)</span>
            </label>
          </div>
          <Select
            value={selectedTags}
            onChange={(tags) => tagsAction(tags)}
            components={animatedComponents}
            isMulti
            options={groupedTags}
            isOptionDisabled={() => selectedTags.length >= 4}
          />
        </div>
        <div className="my-2 mx-4">
          <div className="flex">
            <label
              htmlFor="Deal Description"
              className="block my-2 text-sm font-medium text-input-label-gray"
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
        <ErrorText extraProps={"ml-4"}>{error.dealDesc}</ErrorText>
      </div>
    </div>
  );
};
