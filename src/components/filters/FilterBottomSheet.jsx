import React from "react";
import Sheet from "react-modal-sheet";
import Checkbox from "./FilterCheckbox";
import { XIcon } from "../icons/Icons";
import { INITIAL_FILTER, FILTER_VALUES } from "../../constants/common";

export function FilterBottomSheet({
  isOpen,
  setOpen,
  filters,
  setFilters,
  numResults,
}) {
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
      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        detent="content-height"
      >
        <Sheet.Container>
          <Sheet.Header>
            <div className="flex">
              <button
                type="button"
                className="fixed text-gray-400 bg-transparent rounded-lg text-sm p-1.5 mt-2 mx-6 inline-flex items-center z-20"
                onClick={() => setOpen(false)}
              >
                <XIcon />
                <span className="sr-only">Close Bottomsheet</span>
              </button>
              <div className="fixed flex h-12 text-lg justify-center items-center  mb-2 font-bold w-full border-b-2 z-10 bg-white rounded">
                <h1>Filters</h1>
              </div>
            </div>
          </Sheet.Header>
          <Sheet.Content>
            <div className="text-lg mt-14 overflow-y-scroll">
              <h1 className="text-lg px-8 font-semibold">Misc.</h1>
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
                    <h1 className="text-lg font-semibold ml-8">{Object.keys(category)[0]}</h1>
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
            </div>
          </Sheet.Content>
          <div className="flex mt-20 w-full">
            <div className="fixed justify-between flex bottom-6 h-12 w-full border-t-2 bg-white z-10">
              <button
                className="relative w-20 mx-4 h-10 bg-transparent underline text-input-label-gray my-4 text-sm font-semibold rounded"
                onClick={() => clearFilters()}
              >
                Clear All
              </button>
              <button
                className="inline-flex justify-center items-center relative w-40 h-10 bg-button-blue border-button-blue text-white my-4 mx-4 text-sm font-semibold rounded"
                onClick={() => setOpen(false)}
              >
                See {numResults} results
              </button>
            </div>
          </div>
        </Sheet.Container>
        <Sheet.Backdrop onClick={() => setOpen(false)} />
      </Sheet>
    </>
  );
}
