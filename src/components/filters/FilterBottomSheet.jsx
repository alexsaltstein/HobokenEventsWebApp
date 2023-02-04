import React from "react";
import Sheet from "react-modal-sheet";
import Checkbox from "./FilterCheckbox";
import { XIcon } from "../icons/Icons";
import { INITIAL_FILTER } from "../../constants/common";

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
              <hr className="my-2 w-full"></hr>
              <h1 className="text-lg px-8 font-semibold">Location</h1>
              <Checkbox
                text={"Hoboken"}
                checked={filters.hobo}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, hobo: !filters.hobo }))
                }
              />
              <Checkbox
                text={"Jersey City"}
                checked={filters.jc}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, jc: !filters.jc }))
                }
              />
              <hr className="my-2 w-full"></hr>
              <h1 className="text-lg px-8 font-semibold">Food</h1>
              <Checkbox
                text={"Brunch"}
                checked={filters.brunch}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, brunch: !filters.brunch }))
                }
              />
              <Checkbox
                text={"Apps"}
                checked={filters.apps}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, apps: !filters.apps }))
                }
              />

              <Checkbox
                text={"Lunch"}
                checked={filters.lunch}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, lunch: !filters.lunch }))
                }
              />
              <Checkbox
                text={"Dinner"}
                checked={filters.dinner}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, dinner: !filters.dinner }))
                }
              />
              <hr className="my-2 w-full"></hr>
              <h1 className="text-lg px-8 font-semibold">Drinks</h1>
              <Checkbox
                text={"Cocktails"}
                checked={filters.cocktails}
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    cocktails: !filters.cocktails,
                  }))
                }
              />
              <Checkbox
                text={"Other Drinks"}
                checked={filters.drinks}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, drinks: !filters.drinks }))
                }
              />
              <hr className="my-2 w-full"></hr>
              <h1 className="text-lg px-8 font-semibold">Entertainment</h1>
              <Checkbox
                text={"Triva"}
                checked={filters.trivia}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, trivia: !filters.trivia }))
                }
              />
              <Checkbox
                text={"Music - Live"}
                checked={filters.live}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, live: !filters.live }))
                }
              />
              <Checkbox
                text={"Music - DJ"}
                checked={filters.dj}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, dj: !filters.dj }))
                }
              />
              <Checkbox
                text={"Comedy"}
                checked={filters.comedy}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, comedy: !filters.comedy }))
                }
              />
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
