import React from "react";
import { GenericInput } from "./GenericInput";

export const AddDealElement = ({ deal, removeDeal }) => {
  const setDealOption = (option, val) => {
    deal[option] = val;
  };

  return (
    <div>
      <button onClick={() => removeDeal()}>X</button>
      <GenericInput
        name="dayOfWeek"
        type="text"
        label="day of week"
        onChange={(event) => setDealOption("dayOfWeek", event.target.value)}
      />
      <GenericInput
        name="startTime"
        type="text"
        label="Start time"
        onChange={(event) => setDealOption("startTime", event.target.value)}
      />
      <GenericInput
        name="deals (separated by commas)"
        label="deals"
        type="text"
        onChange={(event) =>
          setDealOption("deals", event.target.value.split(","))
        }
      />
    </div>
  );
};
