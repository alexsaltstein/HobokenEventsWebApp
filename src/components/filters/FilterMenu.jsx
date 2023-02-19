import React from "react";
import Checkbox from "./FilterCheckbox";
import { INITIAL_FILTER, FILTER_VALUES } from "../../constants/common";

export function FilterMenuDesktop({ filters, setFilters }) {
  const clearFilters = () => {
    let clist = document.getElementsByTagName("input");
    for (let i = 0; i < clist.length; ++i) {
      clist[i].checked = false;
    }
    setFilters(INITIAL_FILTER);
  };

  const getTime = () => {
    let currentTime;
    if (!filters.active) {
      let d = new Date();
      currentTime = `${d.getHours().toString()}:${d
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    } else {
      setFilters((prev) => ({ ...prev, active: false }));
    }
    return currentTime;
  };

  return (
    <>
      <div className="hidden lg:block min-w-fit max-h-full ml-8 mr-4 mt-1 py-4">
        
        <h1 className="text-xl mb-2 font-bold w-full">Filters</h1>
        <hr className="my-4"></hr>
        <h1 className="text-lg font-semibold">Misc.</h1>
        <Checkbox
          text={"Active Now"}
          checked={filters.active}
          onClick={() =>
            setFilters((prev) => ({ ...prev, active: getTime() }))
          }
        />        
        {
          FILTER_VALUES.map((category) => (
            <div>
              <hr className="my-4"></hr>
              <h1 className="text-lg font-semibold">{Object.keys(category)[0]}</h1>
              {
                Object.values(category).map((filterGroup) => (
                  Object.values(filterGroup).map((filter) => (
                      <Checkbox
                        text={filter.label}
                        checked={filters[filter.val]}
                        onClick={() =>
                          setFilters((prev) => ({ ...prev, [filter.val]: !filters[filter.val] }))
                        }
                      />
                  ))
                ))
              }
            </div>
          ))
        }
        <hr className="my-4 w-full"></hr>
        <button
          className="relative w-20 h-10 bg-transparent underline text-input-label-gray my-4 text-sm font-semibold rounded"
          onClick={() => clearFilters()}
        >
          Clear All
        </button>
      </div>
    </>
  );
}
