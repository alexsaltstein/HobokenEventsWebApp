import React from "react";

export default function Banner() {
    return (
        <>
            <div className="relative w-screen aspect-auto">
                <div className="relative top-14 left-0 flex w-full h-full">
                    <div className="overflow-hidden">
                        <img className="xl:hidden" src="/hudson.webp" alt="banner"/>
                        <img className="hidden xl:block" src="/skyline4k.jpg" alt="4kbanner"/>
                        <div className="absolute top-0 w-full h-full opacity-50 bg-gradient-to-r from-gray-500 to-transparent" />
                    </div>
                    <div className="absolute flex h-1/3 items-center">
                        <h1 className="font-bold text-white text-2xl h-full w-1/2 relative top-full left-8 md:text-3xl flex items-center">
                            Find your perfect happy hours and happenings
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}