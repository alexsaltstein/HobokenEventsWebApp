import React from 'react';
import { GenericInput } from "./GenericInput";
import Checkbox from './Checkbox';
import { IDIcon } from '../icons';
import "./formStyle.css"

export const AddDealElement = ({ deal, removeDeal }) => {
  let dayOfWeek = {
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false
  };

  const setDealOption = (option, val) => {
    let filter;
    if (option === "dayOfWeek") {
      dayOfWeek[val] = !dayOfWeek[val]
      filter = Object.keys(dayOfWeek).filter((k) => dayOfWeek[k])
      deal[option] = filter;
    } else {
      deal[option] = val;
    }
  };

  return (
    <div className="w-[95%] m-auto mt-4 border">
      <div className="w-[90%] m-auto mt-2 mb-2 lg:w-[99%]">
      <label className="relative mb-2 text-sm font-medium text-input-label-gray">
        Deal Details
        <span className="text-red-400">&nbsp;*</span>
      </label>
        <button className="relative w-[1%] float-right mr-[20px]" onClick={() => removeDeal()}>
            <svg className="w-6 h-6" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
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
            onChange={(event) =>
              setDealOption("title", event.target.value)
            }
          />
        </div>
        <div className='flex'>
          <label htmlFor="Date and Time" className="block text-sm font-medium text-input-label-gray">
            Days and Time
            <span className="text-red-400">&nbsp;*</span>
          </label>
        </div>
        <label htmlFor="Date and Time" className="block text-xs font-medium text-input-label-gray italic">select at least one day of the week</label>
        <div className='w-full mt-2 mb-2'>
          <div className='m-auto flex justify-center'>
            <Checkbox id="sunday" text="S" onClick={() => setDealOption("dayOfWeek", "sunday")} />
            <Checkbox id="monday" text="M" onClick={() => setDealOption("dayOfWeek", "monday")} />
            <Checkbox id="tuesday" text="T" onClick={() => setDealOption("dayOfWeek", "tuesday")} />
            <Checkbox id="wednesday" text="W" onClick={() => setDealOption("dayOfWeek", "wednesday")} />
            <Checkbox id="thursday" text="TH" onClick={() => setDealOption("dayOfWeek", "thursday")} />
            <Checkbox id="friday" text="F" onClick={() => setDealOption("dayOfWeek", "friday")} />
            <Checkbox id="saturday" text="S" onClick={() => setDealOption("dayOfWeek", "saturday")} />
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
            subtext={'(optional)'}
            onChange={(event) => setDealOption("endTime", event.target.value)}
            extraProps="w-[47.5%]"

          />
        </div>
        <div className='flex'>
          <label htmlFor="Deal Description" className="block mb-2 text-sm font-medium text-input-label-gray">
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
            setDealOption("deals", event.target.value.split(","))
          }
        />
      </div>
    </div>
  );
};
