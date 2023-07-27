import React from "react";
import { PowerHourTimer } from "../components/powerHour/PowerHourTimer";
import { MetaData } from "../meta/MetaData";

export const PowerHour = () => {
  return (
    <>
      <MetaData title="Power hour" />
      <div className=" flex justify-center flex-1 items-center">
        <PowerHourTimer />
      </div>
    </>
  );
};
