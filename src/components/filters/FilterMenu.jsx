import React from "react";
import Checkbox from "./FilterCheckbox";
import { INITIAL_FILTER } from "../../constants/common";

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
      <div className="hidden lg:block min-w-fit max-h-full ml-4 mr-4 mt-1 py-4">
        <h1 className="text-xl ml-4 mb-2 font-bold w-full">Filters</h1>
        <div className="text-lg ml-4 mt-2">
          <hr className="my-4 w-full"></hr>
          <h1 className="text-lg mt-2 font-semibold">Misc.</h1>
          <Checkbox
            text={"Active Now"}
            checked={filters.active}
            onClick={() =>
              setFilters((prev) => ({ ...prev, active: getTime() }))
            }
          />
          <hr className="my-4"></hr>
          <h1 className="text-lg font-semibold">Location</h1>
          <div className="">
            <Checkbox
              text={"Hoboken"}
              checked={filters.hobo}
              onClick={() =>
                setFilters((prev) => ({ ...prev, hobo: !filters.hobo }))
              }
            />
            <Checkbox
              text={"Jersey City"}
              onClick={() =>
                setFilters((prev) => ({ ...prev, jc: !filters.jc }))
              }
            />
          </div>
          <hr className="my-4 w-full"></hr>
          <h1 className="text mt-2 font-semibold">Food</h1>
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
          <h1 className="mt-2 font-semibold">Drinks</h1>
          <Checkbox
            text={"Cocktails"}
            checked={filters.cocktails}
            onClick={() =>
              setFilters((prev) => ({ ...prev, cocktails: !filters.cocktails }))
            }
          />
          <Checkbox
            text={"Other Drinks"}
            checked={filters.drinks}
            onClick={() =>
              setFilters((prev) => ({ ...prev, drinks: !filters.drinks }))
            }
          />
          <hr className="my-4 w-full"></hr>
          <h1 className="text-lg mt-2 font-semibold">Entertainment</h1>
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
            onClick={() => setFilters((prev) => ({ ...prev, dj: !filters.dj }))}
          />
          <Checkbox
            text={"Comedy"}
            checked={filters.comedy}
            onClick={() =>
              setFilters((prev) => ({ ...prev, comedy: !filters.comedy }))
            }
          />
          <hr className="my-4 w-full"></hr>
        </div>
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
