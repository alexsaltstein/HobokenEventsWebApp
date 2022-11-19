import React from "react";
import FilterButton from "./FilterButton";

export default function FilterBar() {
  return (
    <>
      <div className="flex w-11/12 my-4 h-16 ml-auto mr-auto pt-3 border-t border-b overflow-y-hidden overflow-x-hidden">
        <FilterButton children={"All"} />
        <FilterButton children={"Food"} disable/>
        <FilterButton children={"Drinks"} disable/>
        <FilterButton children={"Brunch"} disable/>
        <FilterButton children={"Lunch"} disable/>
        <FilterButton children={"Dinner"} disable className="xs:pr-2"/>
        <FilterButton
          children={"Event"}
          disable
          badgeChildren={"Filter Coming Soon!"}
        />
        </div>
    </>
  );
}
