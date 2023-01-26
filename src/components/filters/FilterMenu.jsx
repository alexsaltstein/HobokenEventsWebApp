import React, { useState } from "react";
import Checkbox from "../form/Checkbox";
import Sheet from 'react-modal-sheet';

export function FilterMenuDesktop() {
    return (
        <>
            <div className="hidden lg:block max-w-full max-h-full">
                <h1 className="text-2xl ml-4 mb-2 font-bold w-full">Filters</h1>
                <hr></hr>
                <div className="text-lg ml-4 mt-2">
                <h1 className="text-lg font-semibold">Location</h1>
                <div className="">
                    <Checkbox text={'Hoboken'}/>
                    <Checkbox text={'Jersey City'}/>
                </div>
                <h1 className="text-lg mt-4 font-semibold">Deal Type</h1>
                <Checkbox text={'Food'}/>
                {/*
                <div className="text-lg ml-12">
                    <Checkbox text={'Brunch'} />
                    <Checkbox text={'Lunch'}/>
                    <Checkbox text={'Dinner'}/>
                    <Checkbox text={'Apps'}/>
                </div>
                */}
                <Checkbox text={'Drinks'}/>
                {/*
                <div className="text-lg ml-12">
                    <Checkbox text={'Cocktails'} />
                    <Checkbox text={'Other Drinks'}/>
                </div>
                */}
                <h1 className="text-lg mt-4 font-semibold">Entertainment</h1>
                <Checkbox text={'Triva'}/>
                <Checkbox text={'Music - Live'}/>
                <Checkbox text={'Music - DJ'}/>
                <h1 className="text-lg mt-4 font-semibold">Other Filters</h1>
                <Checkbox text={'Active Now'}/>
                </div>
            </div>
        </>
    )
}

export function FilterBottomSheet({ isOpen, setOpen }) {

    return (
        <>
            <Sheet isOpen={isOpen} onClose={() => setOpen(false)} detent="content-height">
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        <h1 className="text-2xl ml-4 mb-2 font-bold w-full">Filters</h1>
                        <hr />
                        <div className="text-lg ml-8 mt-2">
                        <h1 className="text-lg font-semibold">Location</h1>
                        <div className="">
                            <Checkbox text={'Hoboken'}/>
                            <Checkbox text={'Jersey City'}/>
                        </div>
                        <h1 className="text-lg mt-4 font-semibold">Deal Type</h1>
                        <Checkbox text={'Food'}/>
                        {/*
                        <div className="text-lg ml-12">
                            <Checkbox text={'Brunch'} />
                            <Checkbox text={'Lunch'}/>
                            <Checkbox text={'Dinner'}/>
                            <Checkbox text={'Apps'}/>
                        </div>
                        */}
                        <Checkbox text={'Drinks'}/>
                        {/*
                        <div className="text-lg ml-12">
                            <Checkbox text={'Cocktails'} />
                            <Checkbox text={'Other Drinks'}/>
                        </div>
                        */}
                        <h1 className="text-lg mt-4 font-semibold">Entertainment</h1>
                        <Checkbox text={'Triva'}/>
                        <Checkbox text={'Music - Live'}/>
                        <Checkbox text={'Music - DJ'}/>
                        <h1 className="text-lg mt-4 font-semibold">Other Filters</h1>
                        <Checkbox text={'Active Now'}/>
                        </div>
                        <div className="flex justify-center w-full">
                        <button
                            className="relative m-auto w-11/12 h-10 bg-button-blue border-button-blue text-white my-4 mx-4 text-sm font-semibold rounded"
                            onClick={() => setOpen(false)}
                        >
                            See # results
                        </button>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop onClick={() => setOpen(false)}/>
            </Sheet>
        </>
    );
}