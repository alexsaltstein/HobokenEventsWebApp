import React from 'react';
import { GenericInput } from "./GenericInput";
import Checkbox from './Checkbox';
import "./formStyle.css"

export const AddDealElement = ({ deal, removeDeal }) => {
  const setDealOption = (option, val) => {
    deal[option] = val;
  };

  return (
    <div className="w-[95%] m-auto mt-4 border">
      <div className="w-[90%] m-auto mt-2 mb-2">
      <label class="relative mb-2 text-sm font-medium text-input-label-gray">Deal Details</label>
        <button className="relative w-[1%] float-right mr-2" onClick={() => removeDeal()}>
            <svg class="w-6 h-6" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>
        <div className="flex w-full">
          <GenericInput
            required
            name="Title"
            type="text"
            label="Title"
            extraProps="w-full"
          />
        </div>
        <div className='flex'>
          <label for="Date and Time" class="block mb-2 text-sm font-medium text-input-label-gray">Days and Time</label>
          <span className="text-red-400">*</span>
        </div>
        <div className='w-full mt-2 mb-2'>
          <div className='m-auto flex justify-center'>
            <Checkbox id="sunday" text="S" callback={setDealOption("dayOfWeek", "Monday")} />
            <Checkbox id="monday" text="M" callback={setDealOption("dayOfWeek", "Monday")} />
            <Checkbox id="tuesday" text="T" callback={setDealOption("dayOfWeek", "Monday")} />
            <Checkbox id="wednesday" text="W" callback={setDealOption("dayOfWeek", "Monday")} />
            <Checkbox id="thursday" text="TH" callback={setDealOption("dayOfWeek", "Monday")} />
            <Checkbox id="friday" text="F" callback={setDealOption("dayOfWeek", "Monday")} />
            <Checkbox id="saturday" text="S" callback={setDealOption("dayOfWeek", "Monday")} />
          </div>
        </div>
        <div className="flex w-full">
          <GenericInput
            required
            name="startTime"
            type="text"
            label="Start Time"
            onChange={(event) => setDealOption("dayOfWeek", event.target.value)}
            extraProps="w-[47.5%]"
          />
          <div className="w-[5%]" />
          <GenericInput
            name="endTime"
            type="text"
            label="End Time"
            onChange={(event) => setDealOption("startTime", event.target.value)}
            extraProps="w-[47.5%]"

          />
        </div>
        <div className='flex'>
          <label for="Deal Description" class="block mb-2 text-sm font-medium text-input-label-gray">Description</label>
          <span className="text-red-400">*</span>
        </div>
        <textarea 
          id="description"
          rows="4"
          class="block p-2.5 w-full text-sm text-input-label-gray rounded border focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write the description here..."
          onChange={(event) =>
            setDealOption("deals", event.target.value.split(","))
          }
        />
      </div>
    </div>
  );
};
