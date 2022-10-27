import React from "react";
import FilterButton from "./FilterButton";

export default function FilterBar() {
    return (
        <>
            <div className="relative top-[4.5rem] flex w-11/12 h-16 ml-auto mr-auto pt-3 border-t border-b overflow-y-hidden">
                <FilterButton children={'All'} />
                <FilterButton children={'Food'} />
                <FilterButton children={'Drinks'} />
                <FilterButton children={'Brunch'} />
                <FilterButton children={'Lunch'} />
                <FilterButton children={'Dinner'} />
                <FilterButton children={'Event'} badgeChildren={'Coming Soon!'} disable={true}/>
            </div>
        </>
    );
}