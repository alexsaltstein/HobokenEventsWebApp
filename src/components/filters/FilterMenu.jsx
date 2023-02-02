import React from "react";
import Sheet from 'react-modal-sheet';
import Checkbox from "./FilterCheckbox";
import { XIcon } from "../icons/Icons";

export function FilterMenuDesktop({ filters, setFilters }) {
    function clearFilters() {
        let clist = document.getElementsByTagName("input");
        for (let i = 0; i < clist.length; ++i) { clist[i].checked = false; }
        setFilters((prev) => ({...prev, hobo: false }))
        setFilters((prev) => ({...prev, jc: false }))
        setFilters((prev) => ({...prev, brunch: false }))
        setFilters((prev) => ({...prev, lunch: false }))
        setFilters((prev) => ({...prev, dinner: false }))        
        setFilters((prev) => ({...prev, cocktails: false }))
        setFilters((prev) => ({...prev, otherDrinks: false }))
        setFilters((prev) => ({...prev, trivia: false }))
        setFilters((prev) => ({...prev, live: false }))
        setFilters((prev) => ({...prev, dj: false }))
        setFilters((prev) => ({...prev, comedy: false }))
    }

    return (
        <>
            <div className="hidden lg:block min-w-fit max-h-full ml-4 mr-4 mt-1 py-4">
                <h1 className="text-xl ml-4 mb-2 font-bold w-full">Filters</h1>
                <div className="text-lg ml-4 mt-2">
                    <hr className="my-4"></hr>
                    <h1 className="text-lg font-semibold">Location</h1>
                    <div className="">
                        <Checkbox text={'Hoboken'} checked={filters.hobo} onClick={() => setFilters((prev) => ({...prev, hobo: !filters.hobo }))}/>
                        <Checkbox text={'Jersey City'}  onClick={() => setFilters((prev) => ({...prev, jc: !filters.jc }))}/>
                    </div>
                    <hr className="my-4 w-full"></hr>
                    <h1 className="text mt-2 font-semibold">Food</h1>
                    <Checkbox text={'Brunch'}  checked={filters.brunch} onClick={() => setFilters((prev) => ({...prev, brunch: !filters.brunch }))}/>
                    <Checkbox text={'Lunch'}  checked={filters.lunch} onClick={() => setFilters((prev) => ({...prev, lunch: !filters.lunch }))}/>
                    <Checkbox text={'Dinner'}  checked={filters.dinner} onClick={() => setFilters((prev) => ({...prev, dinner: !filters.dinner }))}/>
                    <h1 className="mt-2 font-semibold">Drinks</h1>
                    <Checkbox text={'Cocktails'}  checked={filters.cocktails} onClick={() => setFilters((prev) => ({...prev, cocktails: !filters.cocktails }))}/>
                    <Checkbox text={'Other Drinks'}  checked={filters.otherDrinks} onClick={() => setFilters((prev) => ({...prev, otherDrinks: !filters.otherDrinks }))}/>
                    <hr className="my-4 w-full"></hr>
                    <h1 className="text-lg mt-2 font-semibold">Entertainment</h1>
                    <Checkbox text={'Triva'} checked={filters.trivia} onClick={() => setFilters((prev) => ({...prev, trivia: !filters.trivia }))}/>
                    <Checkbox text={'Music - Live'} checked={filters.live} onClick={() => setFilters((prev) => ({...prev, live: !filters.live }))}/>
                    <Checkbox text={'Music - DJ'} checked={filters.dj} onClick={() => setFilters((prev) => ({...prev, dj: !filters.dj }))}/>
                    <Checkbox text={'Comedy'} checked={filters.comedy} onClick={() => setFilters((prev) => ({...prev, comedy: !filters.comedy }))}/>
                    <hr className="my-4 w-full"></hr>
                    <h1 className="text-lg mt-2 font-semibold">Other Filters</h1>
                    <Checkbox text={'Active Now'}/>
                </div>
                <button
                    className="relative w-20 h-10 bg-transparent underline text-input-label-gray my-4 text-sm font-semibold rounded"
                    onClick={() => clearFilters()}
                >
                    Clear All
                </button>
            </div>
        </>
    )
}

export function FilterBottomSheet({ isOpen, setOpen, filters, setFilters, numResults }) {
    function clearFilters() {
        let clist = document.getElementsByTagName("input");
        for (let i = 0; i < clist.length; ++i) { clist[i].checked = false; }
        setFilters((prev) => ({...prev, hobo: false }))
        setFilters((prev) => ({...prev, jc: false }))
        setFilters((prev) => ({...prev, brunch: false }))
        setFilters((prev) => ({...prev, lunch: false }))
        setFilters((prev) => ({...prev, dinner: false }))        
        setFilters((prev) => ({...prev, cocktails: false }))
        setFilters((prev) => ({...prev, otherDrinks: false }))
        setFilters((prev) => ({...prev, trivia: false }))
        setFilters((prev) => ({...prev, live: false }))
        setFilters((prev) => ({...prev, dj: false }))
        setFilters((prev) => ({...prev, comedy: false }))
    }

    return (
        <>
            <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[0.75]}>
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
                        <div className="text-lg mt-14">
                            <h1 className="text-lg px-8 font-semibold">Location</h1>
                            <Checkbox text={'Hoboken'} checked={filters.hobo} onClick={() => setFilters((prev) => ({...prev, hobo: !filters.hobo }))}/>
                            <Checkbox text={'Jersey City'} checked={filters.jc} onClick={() => setFilters((prev) => ({...prev, jc: !filters.jc }))}/>
                            <hr className="my-2 w-full"></hr>
                            <h1 className="text-lg px-8 font-semibold">Food</h1>
                            <Checkbox text={'Brunch'}  checked={filters.brunch} onClick={() => setFilters((prev) => ({...prev, brunch: !filters.brunch }))}/>
                            <Checkbox text={'Lunch'}  checked={filters.lunch} onClick={() => setFilters((prev) => ({...prev, lunch: !filters.lunch }))}/>
                            <Checkbox text={'Dinner'}  checked={filters.dinner} onClick={() => setFilters((prev) => ({...prev, dinner: !filters.dinner }))}/>
                            <hr className="my-2 w-full"></hr>
                            <h1 className="text-lg px-8 font-semibold">Drinks</h1>
                            <Checkbox text={'Cocktails'}  checked={filters.cocktails} onClick={() => setFilters((prev) => ({...prev, cocktails: !filters.cocktails }))}/>
                            <Checkbox text={'Other Drinks'}  checked={filters.otherDrinks} onClick={() => setFilters((prev) => ({...prev, otherDrinks: !filters.otherDrinks }))}/>
                            <hr className="my-2 w-full"></hr>
                            <h1 className="text-lg px-8 font-semibold">Entertainment</h1>
                            <Checkbox text={'Triva'} checked={filters.trivia} onClick={() => setFilters((prev) => ({...prev, trivia: !filters.trivia }))}/>
                            <Checkbox text={'Music - Live'} checked={filters.live} onClick={() => setFilters((prev) => ({...prev, live: !filters.live }))}/>
                            <Checkbox text={'Music - DJ'} checked={filters.dj} onClick={() => setFilters((prev) => ({...prev, dj: !filters.dj }))}/>
                            <Checkbox text={'Comedy'} checked={filters.comedy} onClick={() => setFilters((prev) => ({...prev, comedy: !filters.comedy }))}/>
                            <hr className="my-2 w-full"></hr>
                            <h1 className="text-lg px-8 font-semibold">Other Filters</h1>
                            <Checkbox text={'Active Now'}/>
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
                <Sheet.Backdrop onClick={() => setOpen(false)}/>
            </Sheet>
        </>
    );
}